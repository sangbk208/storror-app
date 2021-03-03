import React from 'react';
import { Link } from 'react-router-dom';

HeaderLogo.propTypes = {
    
};

function HeaderLogo(props) {
    return (
        <Link to="/" className="header__logo">
            <i className="storror-icon">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1375 132" fill="currentColor" height="1em">
                    <g>
                        <g>
                            <polygon points="384.56,16.51 401.01,0 288.37,0 272.03,16.51 302.54,16.51 187.53,132 253.3,132 368.32,16.51     "></polygon>
                            <polygon
                                points="171.28,16.51 253.4,16.51 269.75,0 89.06,0 154.84,66.05 102.23,118.77 78.85,118.77 134.73,62.67 69.05,62.67 
                    0,132 154.84,132 220.51,66.05"
                            ></polygon>
                            <path d="M419.73,0L288.27,132h154.83L574.56,0H419.73z M393.87,115.49h-23.38l98.57-98.98h23.38L393.87,115.49z"></path>
                            <polygon
                                points="1231.05,69.33 1300,0 1145.16,0 1013.71,132 1079.49,132 1112.28,98.98 1143.98,132 1209.65,132 1145.16,66.05 
                    1194.5,16.51 1217.88,16.51 1165.27,69.33"
                            ></polygon>
                            <path
                                d="M963.38,0L839.36,124.64L782.1,66.05l49.33-49.54h23.38l-52.6,52.82h65.68L936.94,0H782.1L658.07,124.64l-57.26-58.59
                    l49.33-49.54h23.38l-52.6,52.82h65.68L755.65,0H600.82L469.36,132h65.68l32.89-33.02l31.6,33.02h51.12h14.56h51.12l32.89-33.02
                    l31.6,33.02h51.12h14.56h140.27L1118.22,0H963.38z M937.53,115.49h-23.38l98.57-98.98h23.38L937.53,115.49z"
                            ></path>
                        </g>
                        <path
                            d="M1330.81765,21.3714286 C1334.34706,20.4714286 1336.43856,18.4142857 1336.43856,14.9428571 C1336.43856,12.3714286 1335.00065,9.67142857 1331.99412,8.64285714 C1330.29477,8.12857143 1328.33399,8 1325.58889,8 L1316.7,8 L1316.7,35 L1321.5366,35 L1321.5366,22.9142857 C1326.50392,22.9142857 1328.59542,22.9142857 1329.37974,27.1571429 C1329.51046,27.8 1329.90261,30.7571429 1330.03333,31.2714286 C1330.42549,33.5857143 1330.94837,34.6142857 1331.07908,35 L1336.7,35 C1335.52353,32.5571429 1335.26209,31.1428571 1334.6085,27.0285714 C1334.08562,23.3 1333.03987,22.2714286 1330.81765,21.3714286 Z M1325.77895,18.9995203 L1321.7,18.9995203 L1321.7,12 L1324.85789,12 C1328.80526,12 1330.25263,12 1331.17368,13.7191804 C1331.56842,14.2103748 1331.7,14.8243678 1331.7,15.4383609 C1331.7,19.1223189 1327.75263,18.9995203 1325.77895,18.9995203 L1325.77895,18.9995203 Z"
                        ></path>
                        <path
                            d="M1326.13544,0 C1314.51381,0 1304.7,9.16816817 1304.7,21.5645646 C1304.7,34.2192192 1314.9012,43 1326.13544,43 C1338.27357,43 1347.57087,33.5735736 1347.7,21.6936937 C1347.7,9.81381381 1338.66096,0 1326.13544,0 Z M1326.13564,41 C1315.45248,41 1306.7,32.5049505 1306.7,21.5643564 C1306.7,10.7524752 1315.19505,2 1326.26436,2 C1337.33366,2 1345.7,10.8811881 1345.7,21.5643564 C1345.57129,32.3762376 1337.07624,41 1326.13564,41 Z"
                        ></path>
                    </g>
                </svg>
            </i>
        </Link>
    );
}

export default HeaderLogo;