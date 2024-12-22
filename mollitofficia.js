function channelSupportScaleType(channel, scaleType) {
  if (channel === "A" && scaleType === "LINEAR") {
    return "A_LINEAR";
  } else if (channel === "A" && scaleType === "LOG") {
    return "A_LOG";
  } else if (channel === "B" && scaleType === "LINEAR") {
    return "B_LINEAR";
  } else if (channel === "B" && scaleType === "LOG") {
    return "B_LOG";
  } else {
    return null;
  }
}
