import { ajax } from './'
class Xhr {
  getChainDate = (postData = {}) => (
    ajax.get('', { params: postData })
  )
}

export default new Xhr()
