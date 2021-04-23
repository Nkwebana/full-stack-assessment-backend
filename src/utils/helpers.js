const axios = require('axios').default;

async function executeApiCall(requestUrl) {
  try {
    const { data, error } = await axios.get(requestUrl);

    if (error) {
      return {
        success: false,
        data: 'error',
        error: error.message,
      };
    }

    return {
      success: true,
      data,
      error: false,
    };
  } catch (error) {
    return {
      success: false,
      data: 'error',
      error: error.message,
    };
  }
}

function handleResponse({ success, data, error }) {
  if (success) {
    return {
      success: true,
      data,
      error: null,
    };
  }

  return {
    success: false,
    data: null,
    error,
  };
}

module.exports = { executeApiCall, handleResponse };
