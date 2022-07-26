<template>
  <div class="menu-footer-left">
	<div class="menu-container container">
		<div class="row d-flex align-items-center justify-content-between">
			<div class="menu-toggle" id="menu-toggle-close">
				<svg xmlns="http://www.w3.org/2000/svg" width="58.045" height="51.959" viewBox="0 0 58.045 51.959">
					<path id="Tracciato_1" data-name="Tracciato 1" d="M1014.487,4508.345c-.893.791-1.584.2-3.847,9.259s-4.2,16.253-4.2,16.253a15.725,15.725,0,0,0,9.211,15.491c10.442,4.915,23.4,8.58,33.771,7.052s13.629-10.448,12.867-17.031-11.728-29.257-25.65-31.482S1015.381,4507.555,1014.487,4508.345Z" transform="translate(-1005.365 -4505.834)" fill="none" stroke="#fff" stroke-width="2"></path>
					<line id="Linea_4" data-name="Linea 4" y1="16" x2="16" transform="translate(21.028 17.961)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"></line>
					<path id="Tracciato_3" data-name="Tracciato 3" d="M0,16l4-4L16,0" transform="translate(37.028 17.962) rotate(90)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"></path>
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
								<svg xmlns="http://www.w3.org/2000/svg" width="135.155" height="8.914" viewBox="0 0 135.155 8.914">
									<path id="Tracciato_2" data-name="Tracciato 2" d="M1217,642.521l26.72-2.117s71.161-4.463,105.28-3.517" transform="translate(-1215.386 -635.221)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="3"></path>
								</svg>
							</div>

						</li>
						<li class="about">
							<a href="[lc_home_url]about" class="text-uppercase">About</a>
							<div class="decoration">
								<svg xmlns="http://www.w3.org/2000/svg" width="135.155" height="8.914" viewBox="0 0 135.155 8.914">
									<path id="Tracciato_2" data-name="Tracciato 2" d="M1217,642.521l26.72-2.117s71.161-4.463,105.28-3.517" transform="translate(-1215.386 -635.221)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="3"></path>
								</svg>
							</div>

						</li>
						<li class="works">
							<a href="[lc_home_url]portfolio" class="text-uppercase">Works</a>
							<div class="decoration">
								<svg xmlns="http://www.w3.org/2000/svg" width="135.155" height="8.914" viewBox="0 0 135.155 8.914">
									<path id="Tracciato_2" data-name="Tracciato 2" d="M1217,642.521l26.72-2.117s71.161-4.463,105.28-3.517" transform="translate(-1215.386 -635.221)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="3"></path>
								</svg>
							</div>

						</li>
						<li class="contacts">
							<a href="[lc_home_url]contacts" class="text-uppercase">Contacts</a>
							<div class="decoration">
								<svg xmlns="http://www.w3.org/2000/svg" width="135.155" height="8.914" viewBox="0 0 135.155 8.914">
									<path id="Tracciato_2" data-name="Tracciato 2" d="M1217,642.521l26.72-2.117s71.161-4.463,105.28-3.517" transform="translate(-1215.386 -635.221)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="3"></path>
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
export default {

}
</script>

<style lang="scss">
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
            padding-block: 2rem;
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
            stroke-width: 8;
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