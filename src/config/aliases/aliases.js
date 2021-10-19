const aliases = (prefix = `src`) => ({
  "@components": `${prefix}/components`,
  "@containers": `${prefix}/containers`,
  "@pages": `${prefix}/pages`,
  "@config": `${prefix}/config`,
  "@hooks": `${prefix}/hooks`,
  "@styles": `${prefix}/styles`,
  "@utils": `${prefix}/utils`,
  "@state": `${prefix}/state`,
  "@types": `${prefix}/types`,
  "react/jsx-dev-runtime": require.resolve("react/jsx-dev-runtime"),
  "react/jsx-runtime": require.resolve("react/jsx-runtime"),
});

module.exports = aliases;
