export function getQueryParam(key: string) {
  if (!key) {
    return '';
  }
  let value = '';
  const paramStr = window.location.search
    ? window.location.search.split('?')[1]
    : '';

  if (paramStr) {
    paramStr.split('&').forEach((param) => {
      const [paramKey, paramValue] = param.split('=');
      if (paramKey === key) {
        value = paramValue;
      }
    });
  }

  return value;
}

export function otherUtils() {
  console.log('waiting');
}
