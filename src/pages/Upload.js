import React from 'react'
import styled from 'styled-components'
import { Grid, Input, Text } from '../elements'
import { useDispatch } from 'react-redux'
import { actionCreators as cardActions } from '../redux/modules/card'
import { history } from '../redux/configureStore'

// elements

// react-icons
import { MdClose } from 'react-icons/md'

const Upload = (props) => {
  const dispatch = useDispatch()

  const option_list = [
    'Holidays',
    'Blockchain',
    'Wallpapers',
    '3DRenders',
    'Textures&Patterns',
    'Architecture',
    'Experimental',
    'Nature',
    'Business&Work',
    'Fashion',
    'Food&Drink',
    'Health&Wellness',
    'CurrentEvents',
    'People',
    'Interiors',
  ]

  const fileInput = React.useRef('')
  const [imgfile, setImgfile] = React.useState('')
  const [tag, setTags] = React.useState(0)
  const [location, setLocations] = React.useState('')
  const [textarea, setTexts] = React.useState('')
  const [size, setSizes] = React.useState('small')

  const change_text = (e) => {
    setTexts(e.target.value)
  }
  const change_location = (e) => {
    setLocations(e.target.value)
  }

  const check_button = (e) => {
    setSizes(e.target.value)
  }

  const handleChangeFile = (e) => {
    setImgfile(e.target.files)
    let reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])

    reader.onload = () => {
      const file = reader.result

      if (file) {
        var file_picture = file.toString()

        setImgfile(file_picture)
      }
    }
  }

  const handleClick = (e) => {
    setTags(e.target.value)
  }

  const closeModal = () => {
    history.push('/')
  }

  window.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
      history.push('/')
    }
  })

  //액션 디스패치
  const addCard = () => {
    const fileCheck = document.getElementsByClassName('bfile').value;
           
    if(location == '' || textarea == ''){
                
        window.alert("게시물을 다 넣어주세요!")
        return;
                
    }
    dispatch(cardActions.addCardDB(fileInput.current.files[0], option_list[tag], location, textarea, size))
  }


  return (
    <>
      <UploadModalBody>
        <div className="upload-modal-overlay" onClick={closeModal}>
          <div className="upload-modal-content">
            <div>
              <button className="close-modal-btn" onClick={closeModal}>
                <MdClose className="close-modal-icon" />
              </button>
            </div>
            <div className="upload-modal-container" onClick={(e) => e.stopPropagation()}>
              <UploadHeader>
                <div>
                  <h4 className="header-title">Submit to Unsplash</h4>
                </div>
                <div>
                  <a className="header-info" href>
                    Need help?
                  </a>
                </div>
              </UploadHeader>
              <UploadBody>
                {/* **** 이미지 업로드 전 **** */}
                <div className="input-area">
                  <button className="input-btn">
                    {imgfile ? (
                      <>
                        {size === 'small' && <img width="380px" height="230px" src={imgfile}></img>}
                        {size === 'medium' && <img width="380px" height="300px" src={imgfile}></img>}
                        {size === 'large' && <img width="380px" height="420px" src={imgfile}></img>}
                      </>
                    ) : (
                      <div className="drop-area">
                        <div className="img-area">
                          <label for="input-file">
                            <img src="https://unsplash.com/a/img/uploader/dropbox-empty-illustration/2x.png"></img>
                          </label>
                        </div>
                        <div className="text-area">
                          Drag and drop up to 1 images <br />
                          or <span className="highlight-browse">Browse</span> to choose a file
                        </div>
                      </div>
                    )}
                  </button>
                  {imgfile ? (
                    <>
                      <Grid width="380px">
                        <select onChange={handleClick} style={{ width: '380px', border: '1px solid black' }} class="dropdown">
                          <option value="0">Holidays</option>
                          <option value="1">Blockchain</option>
                          <option value="2">Wallpapers</option>
                          <option value="3">3DRenders</option>
                          <option value="4">Textures&Patterns</option>
                          <option value="5">Architecture</option>
                          <option value="6">Experimental</option>
                          <option value="7">Nature</option>
                          <option value="8">Business&Work</option>
                          <option value="9">Fashion</option>
                          <option value="10">Food&Drink</option>
                          <option value="11">Health&Wellness</option>
                          <option value="12">CurrentEvents</option>
                          <option value="13">People</option>
                          <option value="14">Interiors</option>
                        </select>
                        <Input value={location} _onChange={change_location} nomal placeholder="location"></Input>
                        <Input value={textarea} _onChange={change_text} textarea2 placeholder="Add a description(optional)"></Input>
                      </Grid>
                      <Grid flex="flex; align-items:center; justify-content:center" width="500px">
                        <Grid flex="flex; align-items:center" width="90px">
                          <Text bold>Small</Text>
                          <input type="radio" name="layout" value="small" onChange={check_button} />
                        </Grid>
                        <Grid flex="flex; align-items:center" width="110px">
                          <Text bold>Medium</Text>
                          <input type="radio" name="layout" value="medium" onChange={check_button} />
                        </Grid>
                        <Grid flex="flex; align-items:center" width="90px">
                          <Text bold>Large</Text>
                          <input type="radio" name="layout" value="large" onChange={check_button} />
                        </Grid>
                      </Grid>
                    </>
                  ) : (
                    <></>
                  )}

                  {/* ref={picture} onChange={selectPicture} */}
                  <input className="bfile" ref={fileInput} onChange={handleChangeFile} id="input-file" type="file" accept="image/jpeg, image/jpg" data-test="uploader-input"></input>
                  <div className="file-info-area">
                    <div className="input-file-info">
                      <ul className="info-list">
                        <li className="info-list-item">
                          <span className="bold">High quality photos</span> (at least <span className="bold">5MP</span>)
                        </li>
                        <li className="info-list-item">
                          Photos are <span className="bold">clear & original</span>
                        </li>
                      </ul>
                      <ul className="info-list">
                        <li className="info-list-item">
                          Only upload photos you <span className="bold">own the rights to</span>
                        </li>
                        <li className="info-list-item">Zero tolerance for nudity, violence or hate</li>
                      </ul>
                      <ul className="info-list">
                        <li className="info-list-item">Respect the intellectual property of others</li>
                        <li className="info-list-item">
                          Read the{' '}
                          <span>
                            <a className="link" href>
                              Unsplash Terms
                            </a>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* **** 이미지 업로드 후 **** */}
                {/* <div className="preview-area">
                  <div className="preview-title">
                    <h2 className="title">Select size</h2>
                    <div className="select-btn">
                      <button className="small size-btn">small</button>
                      <button className="medium size-btn">medium</button>
                      <button className="large size-btn">large</button>
                    </div>
                  </div>
                  <div className="preview-box">
                    <Uploadform size="large" />
                  </div>
                </div> */}
              </UploadBody>
              <UploadFooter>
                <div>
                  <a href className="unsplash-license">
                    Read the Unsplash License
                  </a>
                </div>
                <div className="footer-btn">
                  <button className="cancel-btn">Cancel</button>
                  <button
                    onClick={() => {
                      addCard()
                    }}
                    className="submit-btn"
                  >
                    Submit to Unsplash
                  </button>
                </div>
              </UploadFooter>
            </div>
          </div>
        </div>
      </UploadModalBody>
    </>
  )
}

const UploadModalBody = styled.div`
  width: 100vw;
  height: 100%;
  position: absolute;
  box-sizing: border-box;
  z-index: 0;

  .upload-modal-overlay {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    backface-visibility: hidden;
    /* overflow: auto; */
    overflow-y: hidden;
    background-color: #0009;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 5;

    .upload-modal-content {
      color: #111;
      font-size: 15px;
      font-weight: 400;
      line-height: 1.6;
      padding: 60px;
      height: 100%;
      display: flex;

      .close-modal-btn {
        position: fixed;
        top: 0;
        left: 0;
        margin: 8px 0 0 8px;
        padding: 0;
        outline: none;
        border: none;
        background-color: transparent;
        cursor: pointer;

        .close-modal-icon {
          font-size: 24px;
          color: #fff;
        }
      }

      .upload-modal-container {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        position: fixed;
        height: 100%;
        max-height: 1100px;
        max-width: 1400px;
        width: 100%;
        background-color: #fff;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
      }
    }
  }
`

const UploadHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 30px;
  padding: 8px 16px 10px;
  background-color: #fff;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  .header-title {
    font-size: 15px;
    font-weight: 600;
    color: #111;
    margin: 0;
  }

  .header-info {
    font-size: 14px;
    color: #767676;
    text-decoration: underline;
    transition: all 0.1s ease-in-out;
    cursor: pointer;

    transition: color 0.1s ease-in-out;

    &:hover {
      color: #111;
    }
  }
`

const UploadBody = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0 16px 16px;
  height: 100%;

  .input-area {
    box-sizing: border-box;
    padding: 24px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 2px;
    border: 2px dashed #d1d1d1;
    height: 100%;

    #input-file {
      display: none;
      padding: initial;
      border: initial;
    }

    .input-btn {
      outline: none;
      border: none;
      background-color: #fff;
      width: 420px;
      padding: 0;
      cursor: pointer;
      transition: color 0.1s ease-in-out;
      margin-top: auto;

      &:hover > .highlight-browse {
        ::after {
          color: #086be3;
        }
      }

      .drop-area {
        display: flex;
        flex-direction: column;
        align-items: center;

        .img-area {
          width: 130px;
          margin-bottom: 16px;
          position: relative;

          img {
            width: 100%;
          }
        }

        .text-area {
          font-size: 28px;
          font-weight: 700;
          color: #111;
          max-width: 420px;
          line-height: 1.2;

          .highlight-browse {
            color: #007fff;
            transition: color 0.1s ease-in-out;

            &:hover {
              color: #086be3;
            }
          }
        }
      }
    }
    .file-info-area {
      margin-top: auto;
      .input-file-info {
        display: flex;
        flex-direction: row;
        align-items: center;

        .info-list {
          margin: 8px 16px;
          padding-left: 8px;
          .info-list-item {
            font-size: 13px;
            color: #767676;

            .bold {
              font-weight: bolder;
            }

            .link {
              text-decoration: underline;
              cursor: pointer;
              transition: color 0.1s ease-in-out;

              &:hover {
                color: #111;
              }
            }
          }
        }
      }
    }
  }

  .preview-area {
    height: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    max-width: 500px;
    margin: 0 auto;

    .preview-box {
      height: 100%;
      display: flex;
      justify-content: center;
    }

    .preview-title {
      text-align: center;
      color: #111;
      font-size: 28px;
      line-height: 1.6;
      padding: 10px;

      .title {
        margin: 12px 0 24px;
      }
      .select-btn {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        .size-btn {
          outline: none;
          border: none;
          background-color: #111;
          color: #fff;
          cursor: pointer;
          padding: 6px 12px;
          border-radius: 20px;
          transition: background-color 0.1s ease-in-out;

          &:hover {
            background-color: #333;
          }
        }
      }
    }
  }
`

const UploadFooter = styled.div`
  height: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  border-top: 1px solid #d1d1d1;

  .unsplash-license {
    font-size: 12px;
    text-decoration: none;
    color: #767676;
    cursor: pointer;
    transition: color 0.1s ease-in-out;

    &:hover {
      color: #111;
    }
  }

  .footer-btn {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    .cancel-btn,
    .submit-btn {
      box-sizing: border-box;
      background-color: #fff;
      border: 0.5px solid #d1d1d1;
      padding: 0 9px;
      margin: 0;
      font-size: 14px;
      font-weight: 600;
      text-align: center;
      border-radius: 4px;
      height: 32px;
      line-height: 30px;
      color: #767676;
      cursor: pointer;
      transition: all 0.1s ease-in-out;

      &:hover {
        color: #111;
        border: 0.5px solid #111;
      }
    }
  }
`

export default Upload
