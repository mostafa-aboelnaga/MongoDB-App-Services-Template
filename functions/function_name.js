// reference: https://www.mongodb.com/docs/atlas/app-services/manage-apps/configure/config/functions/#function-source-code
exports = function function_name(input) {
    if(typeof input !== "number") {
      throw new Error("You must call addOne() with a number");
    }
    return input + 1;
  };