export const replaceUrlParam = (url, paramName, paramValue) =>{
  if(paramValue == null)
    paramValue = '';
  var pattern = new RegExp('\\b('+paramName+'=).*?(&|$)')
  if(url.search(pattern)>=0){
    return url.replace(pattern,'$1' + paramValue + '$2');
  }
  return url + (url.indexOf('?')>0 ? '&' : '?') + paramName + '=' + paramValue
}

export const getNextPageUrl = (response, pagination) => {
  if (pagination.count === 0) {
    return null
  }
  const nextOffset = pagination.offset+pagination.count
  const nextLink = replaceUrlParam(response.url, 'offset', nextOffset)

  if (!nextLink) {
    return null
  }

  return nextLink
}
