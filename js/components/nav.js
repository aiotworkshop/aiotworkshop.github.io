document.getElementById('nav').innerHTML=`

<div class="header_nav" id="header_nav_pin">
    <div class="header_nav_inner">
        <div class="header_nav_container">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="header_nav_content d-flex flex-row align-items-center justify-content-start">
                            <nav class="main_nav">
                                <ul>
                                    <li id="home"><a href="index.html">Home</a></li>
                                    <li id="cfp"><a href="CFP.html">Call For Papers</a></li>
                                    <!-- <li id="papers"><a href="accepted-papers.html">Accepted Papers</a></li> -->
                                    <li id="organizers"><a href="organizers.html">Organizers</a></li>
                                    <li id="program"><a href="program.html">Program</a></li>
                                    <!-- <li><a href="keynote.html">Keynote</a></li> -->
                                    <li>
                                        <div class="dropdown">
                                            <div class="dropbtn">KDD 2022
                                                <i class="fa fa-angle-down"></i>
                                            </div>
                                            <div class="dropdown-content">
                                                <a href="index.html">KDD 2022</a>
                                                <a href="2021/index.html">KDD 2021</a>
                                                <a href="2020kdd/index.html">KDD 2020</a>
                                                <a href="2019/index.html">KDD 2019</a>
                                            </div>
                                        </div> 
                                    </li>
                                    <li><a href="2020/index.html">AAAI 2020</a></li>
                                </ul>
                            </nav>

                            <div class="header_extra ml-auto">
                                <div class="button header_button">
                                <a href="https://kdd.org/kdd2021/attending">Register</a>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

`;