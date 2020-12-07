import React from 'react'
import './home.scss'
import { Button } from 'antd-mobile'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'

const NewCompl = ({ daList }) => {
  return (
    <React.Fragment>
      <div>
        {
          daList.map(v => {
            return <div key={v.text}>{v.text}</div>
          })
        }
      </div>
    </React.Fragment>
  )
}
NewCompl.propTypes = {
  daList: PropTypes.array
}
@inject('tyrMobx')
@observer
class AppCompl extends React.Component {
  static propTypes = {
    tyrMobx: PropTypes.object
  }
  // log = () => {
  //   console.log('不要点我')
  // }
  componentDidMount() {
    const { daList } = this.props.tyrMobx
    console.log('12', daList)
  }
  render() {
    const { daList, counts, addFun } = this.props.tyrMobx
    return (
      <React.Fragment>
        <div>
          你可以用他做任何事情
        </div>

        <div>{counts}</div>
        <NewCompl daList={daList} />
        <Button onClick={addFun}>
          点我
        </Button>
      </React.Fragment>
    )
  }
}

export default AppCompl
