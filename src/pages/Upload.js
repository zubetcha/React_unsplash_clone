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
                <div className="header-title">
                  <h4>Submit to Unsplash</h4>
                </div>
                <div className="header-info">
                  <a>Need help?</a>
                </div>
              </UploadHeader>
              <div className="choose-images">
                <div>
                  <button>
                    <div>
                      <div>
                        <img></img>
                      </div>
                    </div>
                  </button>
                  <div></div>
                </div>
              </div>
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
  min-height: 48px;
  padding: 8px 16px 10px;
  background-color: #888;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`

export default Upload
