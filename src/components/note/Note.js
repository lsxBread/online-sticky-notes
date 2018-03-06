import React from 'react'
import {Input, Button, Popconfirm, message, Popover, Icon, Radio } from 'antd'
import './note.css'

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const { TextArea } = Input

class Note extends React.Component {

  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.confirm = this.confirm.bind(this)
    this.changeColor = this.changeColor.bind(this)
  }

  handleChange(e) {
    this.props.changeContent(this.props.note.id, e.target.value)
  }

  confirm(e) {
    message.success('Click on Yes')
    this.props.deleteNote(this.props.note.id)
  }

  changeColor(e) {
    this.props.changeColor(this.props.note.id, e.target.value)
  }

  render() {
    let {content, time, color, rotate } = this.props.note
    return (
      <div className="wrapper">
        <aside
          className="note-wrap"
          style={
            {
              background: color,
              transform: `rotate(${rotate}deg)`
            }
          }
        >
          <div className='note-sticky'></div>
          <TextArea 
            className='note-content'
            placeholder="Add Note..."
            autosize
            onChange={(e) => this.handleChange(e)}
            value={content}
          />
          <Popconfirm
            title="Are you sure delete this note?"
            onConfirm={this.confirm}
            okText="Yes"
            cancelText="No"
          >
            <Button
              className='note-delete'
              icon="close"
              shape="circle"
              ghost='true'
              size='small'
            ></Button>
          </Popconfirm>
          <div className='note-time'>{new Date(time).toLocaleString()}</div>
          <Popover
            content={
              <RadioGroup onChange={(e)=>this.changeColor(e)}>
                <RadioButton value="#f7e999" style={{background:'#f7e999'}}></RadioButton>
                <RadioButton value="#b9dcf4" style={{background:'#b9dcf4'}}></RadioButton>
                <RadioButton value="#ffbda3" style={{background:'#ffbda3'}}></RadioButton>
                <RadioButton value="#caf4b9" style={{background:'#caf4b9'}}></RadioButton>
                <RadioButton value="#f4a142" style={{background:'#f4a142'}}></RadioButton>
                <RadioButton value="#f9534d" style={{background:'#f9534d'}}></RadioButton>
                <RadioButton value="#2bc456" style={{background:'#2bc456'}}></RadioButton>
              </RadioGroup>
            }
            title="Choose Color"
            trigger="click"
          >
            <Icon className='note-edit' type='setting'></Icon>
          </Popover>
        </aside>
      </div>
    )
  }
}

export default Note