module.exports = {
//...
  resolve: {
    extensions: ['.ts','.js', '.jsx', '.tsx'],
    fallback: {
      util: require.resolve("util/")
    }
  },
};