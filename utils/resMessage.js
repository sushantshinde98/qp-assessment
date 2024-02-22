module.exports = {
  COMMON_MESSAGE: {
    WELCOME: {
      success: true,
      message: "Welcome to QS APIs!",
      messageCode: "WELCOME",
      statusCode: 200,
    },
    ERROR: {
      success: false,
      message: "Something went wrong! Please try again.",
      messageCode: "ERROR",
      statusCode: 500,
    },
  },
  ROLE: {
    ADMIN_ROLE_ERROR: {
      success: false,
      message: "Access Dennied!, Only Admin role can access this api.",
      messageCode: "ADMIN_ROLE_ERROR",
      statusCode: 403,
    },
  },
  LOGIN: {
    LOGIN_SUCCESS: {
      success: true,
      message: "Logged in successfully!",
      messageCode: "LOGIN_SUCCESS",
      statusCode: 200,
    },

    LOGIN_FAILED: {
      success: false,
      message: "Invalid Email-Id or Password!",
      messageCode: "LOGIN_FAILED",
      statusCode: 401,
    },
  },
  ADMIN: {
    ADD_GROCERY_SUCCESS: {
      success: true,
      message: "Grocery Added Successfully!",
      messageCode: "ADD_GROCERY_SUCCESS",
      statusCode: 200,
    },
    UPDATE_GROCERY_SUCCESS: {
      success: true,
      message: "Grocery Updated Successfully!",
      messageCode: "UPDATE_GROCERY_SUCCESS",
      statusCode: 200,
    },
    REMOVE_GROCERY_SUCCESS: {
      success: true,
      message: "Grocery Removed Successfully!",
      messageCode: "REMOVE_GROCERY_SUCCESS",
      statusCode: 200,
    },
    GET_GROCERY_SUCCESS: {
      success: true,
      message: "Grocery Fetched Successfully!",
      messageCode: "GET_GROCERY_SUCCESS",
      statusCode: 200,
    },
  },
  USER: {
    BOOK_GROCERY_SUCCESS: {
      success: true,
      message: "Grocery booked Successfully, Thank you!",
      messageCode: "BOOK_GROCERY_SUCCESS",
      statusCode: 200,
    },
    GET_AVAILABLE_GROCERY_SUCCESS: {
      success: true,
      message: "Grocery Fetched Successfully!",
      messageCode: "GET_AVAILABLE_GROCERY_SUCCESS",
      statusCode: 200,
    },
  },
};
