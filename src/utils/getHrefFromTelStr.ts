const getHrefFromTelStr = (tel: string) => {
  return tel.replace(/[- )(]/g, '')
}

export default getHrefFromTelStr
