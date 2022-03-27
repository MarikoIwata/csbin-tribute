function createSecretHolder(secret) {
  return {
    getSecret() {
      return secret;
    },
    setSecret(v) {
      secret = v;
    },
  };
}

module.exports = createSecretHolder;
