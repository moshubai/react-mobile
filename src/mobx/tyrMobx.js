import { observable, computed, action } from 'mobx'
class Store {
    @observable daList = [
      { text: '列表1' },
      { text: '列表2' },
      { text: '列表3' },
    ];
    @observable counts = 0;

    @action addFun= () => {
      let num = this.counts
      this.counts = (num += 1)
      console.log(this.counts)
    }
}

export default new Store()
