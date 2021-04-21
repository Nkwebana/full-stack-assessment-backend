const axios = require('axios').default;

async function pullDeezerArtistDataController(requestPayload) {
  const { msisdn } = requestPayload;

  // const payload = {
  //   methodName: 'getCustomerDevicesQuestion',
  //   input: {
  //     authMsisdn: {
  //       value: msisdn,
  //     },
  //     conversationId: {
  //       value: '1111111111',
  //     },
  //     days: {
  //       value: 30,
  //     },
  //   },
  // };

  // try {
  //   const { response } = await axios.post(url, payload);

  return {
    success: true,
    data: {
      response: { value: 'Iphone' },
    },
    error: false,
  };
  // } catch (error) {
  //   return {
  //     success: false,
  //     data: 'error',
  //     error: error.message,
  //   };
  // }
}

module.exports = { pullDeezerArtistDataController };
