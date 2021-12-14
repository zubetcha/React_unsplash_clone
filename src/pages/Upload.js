import React from 'react'
import styled from 'styled-components'

const Upload = (props) => {
  return (
    <>
      <UploadModalBody>
        <div className="upload-modal-overlay">
          <div className="upload-modal-content">
            <div>
              <button>X</button>
            </div>
            <div className="upload-modal-container">
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
                <div className="input-area">
                  <button className="input-btn">
                    <div className="drop-area">
                      <div className="img-area">
                        <img src="https://unsplash.com/a/img/uploader/dropbox-empty-illustration/2x.png"></img>
                      </div>
                      <div className="text-area">
                        Drag and drop up to 1 images <br />
                        or <span className="highlight-browse">Browse</span> to choose a file
                      </div>
                    </div>
                  </button>
                  <div></div>
                </div>
              </UploadBody>
              <div className="upload-modal-footer"></div>
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
  /* opacity: 0; */
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

      .upload-modal-container {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        position: fixed;
        height: 100%;
        max-height: 1000px;
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
  background-color: #e8e8e8;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0 16px 16px;

  .input-area {
    box-sizing: border-box;
    padding: 24px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 2px;
    border: 2px dashed #d1d1d1;
    background-color: #fff;

    .input-btn {
      outline: none;
      border: none;
      background-color: #fff;
      width: 420px;
      padding: 0;
      cursor: pointer;

      &:hover .highlight-browse {
        color: #086be3;
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

            &:hover {
              color: #086be3;
            }
          }
        }
      }
    }
  }
`

export default Upload
