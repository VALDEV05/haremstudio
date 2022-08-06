<template>
  <div class="menu-footer-left">
    <div class="menu-container container">
      <div class="row d-flex align-items-center justify-content-between">
        <div class="menu-toggle" id="menu-toggle-close">
          <svg
            id="Livello_2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 37.09 37.09"
          >
            <g id="Livello_1-2">
              <g id="Livello_2-2">
                <g id="Livello_1-2">
                  <path
                    d="M22.59,0H14.51C6.5,0,0,6.5,0,14.51H0v8.08c0,8.01,6.5,14.5,14.51,14.5h8.08c8.01,0,14.49-6.49,14.5-14.5V14.51c0-8.01-6.49-14.5-14.5-14.51Z"
                  />
                  <line
                    id="Linea_4"
                    class="close-menu"
                    x1="8.02"
                    y1="29.48"
                    x2="29.65"
                    y2="7.85"
                  />
                  <path
                    id="Tracciato_3"
                    class="close-menu"
                    d="M8.02,7.85l5.41,5.41L29.65,29.48"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div class="row menu-container-footer-left">
        <div class="col-12 col-md-6">
          <div class="main-right-menu-container" role="navigation">
            <ul class="main-right-menu">
              <li class="home">
                <a href="[lc_home_url]" class="text-uppercase">Home</a>
                <div class="decoration">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="135.155"
                    height="8.914"
                    viewBox="0 0 135.155 8.914"
                  >
                    <path
                      id="Tracciato_2"
                      data-name="Tracciato 2"
                      d="M1217,642.521l26.72-2.117s71.161-4.463,105.28-3.517"
                      transform="translate(-1215.386 -635.221)"
                      fill="none"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-width="3"
                    ></path>
                  </svg>
                </div>
           </li>
              <li class="about">
                <a href="[lc_home_url]about" class="text-uppercase">About</a>
                <div class="decoration">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="135.155"
                    height="8.914"
                    viewBox="0 0 135.155 8.914"
                  >
                    <path
                      id="Tracciato_2"
                      data-name="Tracciato 2"
                      d="M1217,642.521l26.72-2.117s71.161-4.463,105.28-3.517"
                      transform="translate(-1215.386 -635.221)"
                      fill="none"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-width="3"
                    ></path>
                  </svg>
                </div>
              </li>
              <li class="works">
                <a href="[lc_home_url]portfolio" class="text-uppercase"
                  >Works</a
                >
                <div class="decoration">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="135.155"
                    height="8.914"
                    viewBox="0 0 135.155 8.914"
                  >
                    <path
                      id="Tracciato_2"
                      data-name="Tracciato 2"
                      d="M1217,642.521l26.72-2.117s71.161-4.463,105.28-3.517"
                      transform="translate(-1215.386 -635.221)"
                      fill="none"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-width="3"
                    ></path>
                  </svg>
                </div>
              </li>
              <li class="contacts">
                <a href="[lc_home_url]contacts" class="text-uppercase"
                  >Contacts</a
                >
                <div class="decoration">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="135.155"
                    height="8.914"
                    viewBox="0 0 135.155 8.914"
                  >
                    <path
                      id="Tracciato_2"
                      data-name="Tracciato 2"
                      d="M1217,642.521l26.72-2.117s71.161-4.463,105.28-3.517"
                      transform="translate(-1215.386 -635.221)"
                      fill="none"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-width="3"
                    ></path>
                  </svg>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.close-menu {
  fill: none;
  stroke: #fff;
  stroke-linecap: round;
  stroke-width: 3px;
}
.menu-footer-left {
  position: fixed;
  inset: 0;
  background-color: #000;
  color: #fff;
  transform: translateX(100vw);
  overflow-y: hidden;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 9999;
  a {
    color: inherit;
    text-decoration: none;
  }
  .menu-container {
    padding-block: 1rem;
    height: 100vh;
    .menu-container-footer-left {
      height: 100%;
      .main-right-menu-container {
        height: 100%;
        display: flex;
        align-items: center;
        .main-right-menu {
          list-style: none;
          padding: 0;
          height: 70%;
          margin: auto;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          li {
            text-align: center;
            .decoration {
              display: none !important;
            }
            &.active {
              .decoration {
                display: block !important;
              }
            }
            a {
              color: #fff;
              font-size: 30px;
              font-weight: 500;
              text-decoration: none;
            }
          }
        }
      }
    }
  }
  .menu-footer-left nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex-grow: 1;
    gap: 1rem;
  }
  .menu-footer-left nav a {
    position: relative;
    font-size: 3.5rem;
  }
  #close-menu {
    width: 24px;
    height: 24px;
    float: right;
    cursor: pointer;
    /* opacity: 0; */
  }
  .close-menu {
    fill: none;
    stroke: #fff;
    stroke-width: 4;
    stroke-miterlimit: 10;
  }
  #menu-toggle-close {
    width: fit-content;
    margin-left: auto;
    #Raggruppa_23 {
      #Linea_2 {
        display: none;
      }
    }
  }
}
</style>