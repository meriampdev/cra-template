import React, { Component } from 'react';
import { connect } from 'react-redux'
import { onTakeScreenShot } from '../../Store/actions/screenShot'
import Spinner from '../../Components/Spinner'
import './ScreenShot.css';

import {
  TextField, Button, Paper,
  SelectField, Grid
} from 'react-md'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      siteURL: '',
      siteCookie: [],
      targetElement: '',
      waitForSelector: '',
      waitForSelectorVisibility: '',
      cookieName: '',
      cookieValue: '',
      siteDataSelect: '',
      showAddCookie: false,
      loading: false
    }
  }

  onChangeInput(field, value){
    this.setState({ [field]: value })
  }

  onSelectChange(value) {
    this.setState({ siteDataSelect: value, showAddCookie: true })
  }

  onClickSetCookie() {
    this.setState({ showAddCookie: true })
  }

  onAddCookie() {
    const { cookieName, cookieValue } = this.state
    let siteCookie = [ ...this.state.siteCookie, { name: cookieName, value: cookieValue } ]

    console.log('siteCookie', siteCookie)
    this.setState({
      cookieName: '', cookieValue: '',
      siteCookie: siteCookie,
      showAddCookie: false
    })
  }

  onTake() {
    const data = {
      baseURL: 'https://test-voicebaenrollment.base.study/login_register',
      targetURL: this.state.siteURL,
      cookies: this.state.siteCookie,
      waitForSelector: this.state.waitForSelector,
      waitForSelectorVisibility: Boolean(this.state.waitForSelectorVisibility),
      targetElement: this.state.targetElement
    }
    this.props.onTakeScreenShot(data)
  }

  render() {
    const { screenShot } = this.props
    let imageSrc = screenShot.screenshot ? `data:image/jpeg;base64,${screenShot.screenshot}` : require('../../Assets/images/defaultimage.png')
    return (
      <div className="App">
        <Paper zDepth={1} className="App-paper">
          <div className='container'>
            <div className='side'>
              <TextField
                id="site-to-capture"
                label="URL"
                lineDirection="center"
                placeholder="URL"
                className="md-cell--12 md-cell--bottom"
                value={this.state.siteURL}
                onChange={this.onChangeInput.bind(this, 'siteURL')}
              />
              <TextField
                id="targetElement"
                label="Target Element"
                lineDirection="center"
                placeholder="Target Element"
                className="md-cell--12 md-cell--bottom"
                value={this.state.targetElement}
                onChange={this.onChangeInput.bind(this, 'targetElement')}
              />
              <TextField
                id="waitForSelector"
                label="Wait for selector"
                lineDirection="center"
                placeholder="Wait for selector"
                className="md-cell--12 md-cell--bottom"
                value={this.state.waitForSelector}
                onChange={this.onChangeInput.bind(this, 'waitForSelector')}
              />
              <TextField
                id="waitForSelectorVisibility"
                label="Selector Visibility"
                lineDirection="center"
                placeholder="Selector Visibility"
                className="md-cell--12 md-cell--bottom"
                value={this.state.waitForSelectorVisibility}
                onChange={this.onChangeInput.bind(this, 'waitForSelectorVisibility')}
              />
              {
                this.state.siteCookie.map((cookie)=>{
                  return <TextField
                    key={`cookie-${cookie.name}`}
                    id={`cookie-${cookie.name}`}
                    label={cookie.name}
                    lineDirection="center"
                    placeholder={cookie.name}
                    className="md-cell--12 md-cell--bottom"
                    defaultValue={cookie.value}
                    disabled
                  />
                })
              }
              <Button
                className='shotBtn md-cell--12'
                flat secondary swapTheming
                onClick={this.onClickSetCookie.bind(this)}
              >
                Set Cookie
              </Button>
              {/* <div className='md-cell--12' style={{marginLeft: 'auto'}}>
                <SelectField
                  id="site-data-select"
                  label="Add Data"
                  menuItems={[
                    { name: 'Cookie', value: 'Cookie' },
                    { name: 'Header', value: 'Header' }
                  ]}
                  itemLabel="name"
                  itemValue="value"
                  className="md-cell--12 md-cell--bottom"
                  dropdownIcon = {<i className='fas fa-caret-down' />}
                  value={this.state.siteDataSelect}
                  onChange={this.onSelectChange.bind(this)}
                />
                <Button
                  className='md-cell--4'
                  icon primary
                  forceIconFontSize={true}
                  forceIconSize={12}
                  iconClassName="fas fa-plus"
                />
              </div> */}
              {
                this.state.showAddCookie ?
                  <div className='add-data-div md-cell--12'>
                    <TextField
                      id='cookiename'
                      label={`Cookie Name`}
                      lineDirection="center"
                      placeholder={`Cookie Name`}
                      className="md-cell--12 md-cell--bottom"
                      value={this.state.cookieName}
                      onChange={this.onChangeInput.bind(this, 'cookieName')}
                    />
                    <TextField
                      id='cookievalue'
                      label={`Cookie Value`}
                      lineDirection="center"
                      placeholder={`Cookie Value`}
                      className="md-cell--12 md-cell--bottom"
                      value={this.state.cookieValue}
                      onChange={this.onChangeInput.bind(this, 'cookieValue')}
                    />
                    <Button
                      className='shotBtn md-cell--12'
                      flat secondary swapTheming
                      onClick={this.onAddCookie.bind(this)}
                    >
                      Add Cookie
                    </Button>
                  </div>
                : null
              }

              <Button
                className='shotBtn md-cell--12'
                flat primary swapTheming
                onClick={this.onTake.bind(this)}
              >
                Screen Shot
              </Button>
            </div>
            <div className='screenshot'>
              <img
                src={imageSrc}
                alt='screen shot'
              />
            </div>
          </div>
        </Paper>
        {
          screenShot.processing ? <Spinner /> : null
        }
      </div>
    );
  }
}

export default connect(state => ({
  screenShot: state.screenShot
}), { onTakeScreenShot })(App)
