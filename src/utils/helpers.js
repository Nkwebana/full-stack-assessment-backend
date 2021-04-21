const oracledb = require('oracledb');

async function database(query, values) {
  let connect;

  const { DB_USERNAME, DB_PASSWORD, DB_CONNECTION_STRING } = process.env;

  try {
    connect = await oracledb.getConnection({
      user: DB_USERNAME,
      password: DB_PASSWORD,
      connectString: DB_CONNECTION_STRING,
    });

    console.log('Successfully connected to Oracle!');

    let resp = await connect.execute(query, values, {
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    });

    return {
      result: true,
      data:
        resp && resp.rows && resp.rows[0] ? resp.rows[0] : 'Record not found.',
      error: null,
    };
  } catch (error) {
    return {
      result: false,
      data: null,
      error: error.message,
    };
  } finally {
    if (connect) {
      try {
        await connect.close();
      } catch (err) {
        console.log(err.message);
      }
    }
  }
}

module.exports = { database };
