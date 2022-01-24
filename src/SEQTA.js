// Copyright (C) 2022 Nulkem

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

var isChrome = window.chrome;
var SettingsClicked = false

var stringToHTML = function (str) {
  var parser = new DOMParser();
  var doc = parser.parseFromString(str, "text/html");
  return doc.body;
};

const ShortcutLinks = {
  YouTube: {
    link: "https://www.youtube.com/",
    icon: "https://www.youtube.com/s/desktop/310f846f/img/favicon_144x144.png"
  },
  Outlook: {
    link: "https://outlook.office365.com/mail/inbox",
    icon: "https://outlook-1.cdn.office.net/assets/mail/pwa/v1/pngs/apple-touch-icon.png",
  },
  Office: {
    link: "http://office.com",
    icon: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg"
  },
  Spotify: {
    link: "https://accounts.spotify.com/en/login",
    icon: "https://www.scdn.co/i/_global/touch-icon-144.png"
  },
  Google: {
    link: "https://google.com",
    icon: "https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
  },
  DuckDuckGo: {
    link: "https://duckduckgo.com/",
    icon: "https://duckduckgo.com/assets/icons/meta/DDG-iOS-icon_152x152.png"
  },
  CoolMathGames: {
    link: "https://coolmathgames.com/",
    icon: "https://www.coolmathgames.com/pwa/images/icon-512x512.png"
  },
  SACE: {
    link: "https://apps.sace.sa.edu.au/students-online/login.do",
    icon: "https://pbs.twimg.com/profile_images/948035664783622144/iE9ebnfW_400x400.jpg"
  },
  GoogleScholar: {
    link: "https://scholar.google.com",
    icon: "https://scholar.google.com/favicon.ico"
  },
  Gmail: {
    link: "https://mail.google.com",
    icon: "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico"
  }
  }

function loading() {
  // loadinghtml = stringToHTML(
  //   `<div class="bkloading" id="loading" style="background-color: #1a1a1a;width: 100%;overflow: hidden;opacity: 1;transition: 0.5s;height: 100%;top: 0;position: absolute;left: 0;z-index: 10000;">
  //   <svg width="300" height="160" id="clackers" style="display: block;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);"><svg><path id="arc-left-up" fill="none" d="M 90 90 A 90 90 0 0 1 0 0"/></svg><svg><path id="arc-right-up" fill="none" d="M 100 90 A 90 90 0 0 0 190 0"/></svg><text x="150" y="50" fill="#ffffff" font-size="18"text-anchor="middle">B E T T E R S E Q T A</text><circle style="fill: #333333;" cx="15" cy="15" r="15"><animateMotion dur="1.5s" repeatCount="indefinite"calcMode="linear"keyPoints="0.0;0.19;0.36;0.51;0.64;0.75;0.84;0.91;0.96;0.99;1.0;0.99;0.96;0.91;0.84;0.75;0.64;0.51;0.36;0.19;0.0;0.0;0.05;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0"keyTimes="0.0;0.025;0.05;0.075;0.1;0.125;0.15;0.175;0.2;0.225;0.25;0.275;0.3;0.325;0.35;0.375;0.4;0.425;0.45;0.475;0.5;0.525;0.55;0.575;0.6;0.625;0.65;0.675;0.7;0.725;0.75;0.775;0.8;0.825;0.85;0.875;0.9;0.925;0.95;0.975;1.0"><mpath xlink:href="#arc-left-up"/></animateMotion></circle><circle style="fill: #242424;" cx="135" cy="105" r="15" /><circle style="fill: #161616;" cx="165" cy="105" r="15" /><circle style="fill: #313131;" cx="95" cy="15" r="15"><animateMotion dur="1.5s" repeatCount="indefinite"calcMode="linear"keyPoints="0.0;0.0;0.05;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0.0;0.19;0.36;0.51;0.64;0.75;0.84;0.91;0.96;0.99;1.0;0.99;0.96;0.91;0.84;0.75;0.64;0.51;0.36;0.19;0.0"keyTimes="0.0;0.025;0.05;0.075;0.1;0.125;0.15;0.175;0.2;0.225;0.25;0.275;0.3;0.325;0.35;0.375;0.4;0.425;0.45;0.475;0.5;0.525;0.55;0.575;0.6;0.625;0.65;0.675;0.7;0.725;0.75;0.775;0.8;0.825;0.85;0.875;0.9;0.925;0.95;0.975;1.0"><mpath xlink:href="#arc-right-up"/></animateMotion></circle></svg>
  //   <div style="position: absolute;bottom: 0;right: 0;padding: 10px;color: #4f4f4f;text-anchor: middle;font-size: 20px;">v1.32</div><div style="padding: 20px;background-color: #0d0d0d;width: 30%;border-radius: 60px;position: absolute;color: white;bottom: -100px;left: 50%;transform: translate(-50%, -50%);transition: 1s;" id="reloadnotification">This page is taking unusually long to load. Try refreshing the page.<div style="padding: 10px;position: absolute;right: 0;top: 0;background-color: #c61851;border-radius: 60px;width: 80px;text-align: center;margin: 10px;cursor: pointer;" onclick="window.location.reload(true)">Refresh</div></div></div>`
  // );
  loadinghtml = stringToHTML(
    `<div class="bkloading" id="loading" style="background-color: #1a1a1a;width: 100%;overflow: hidden;opacity: 1;transition: 0.5s;height: 100%;top: 0;position: absolute;left: 0;z-index: 10000;">
    <style>
      .svg {
        transform-origin: center;
        position: absolute;
        top: 50%;
        left: 50%;
      }
      .logo {
        transform: translate(-50%, -50%);
      }
      .big-circle {
        margin: -88px;
        animation-timing-function: ease;
        animation: spin 3s linear infinite;
        -moz-animation: spin 3s linear infinite;
      }
      .small-circle {
        margin: -66px;
        animation-timing-function: ease;
        animation: spin 3s linear infinite;
        -moz-animation: spin 3s linear infinite;
      }
      .outer-circle {
        margin: -108px;
        animation-direction: alternate-reverse;
        animation: spinback 1s linear infinite;
        -moz-animation: spinback 1s linear infinite;
      }
      @-moz-keyframes spin {
        100% {
          -moz-transform: rotate(360deg);
        }
      }
      @-webkit-keyframes spin {
        100% {
          -webkit-transform: rotate(360deg);
        }
      }
      @keyframes spin {
        100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
      @keyframes spinback {
        100% {
          -webkit-transform: rotate(-360deg);
          transform: rotate(-360deg);
        }
      }
      </style>
    <svg height="120" width="120" viewBox="0 0 400 400" class="logo svg"><path xmlns="http://www.w3.org/2000/svg" id="path0" style="fill:#ededed; stroke:none;" d="M186.505 87.037 C 182.415 87.344,173.998 88.440,173.252 88.762 C 172.985 88.877,172.274 89.020,171.672 89.079 C 170.442 89.200,168.636 89.622,167.903 89.959 C 167.635 90.082,167.033 90.234,166.565 90.296 C 165.612 90.422,163.779 90.882,163.040 91.179 C 162.772 91.287,162.061 91.507,161.459 91.668 C 160.857 91.829,160.036 92.098,159.635 92.265 C 159.234 92.432,158.249 92.769,157.447 93.014 C 156.644 93.259,155.884 93.550,155.757 93.660 C 155.630 93.770,155.327 93.860,155.085 93.860 C 154.842 93.860,154.454 93.965,154.222 94.093 C 153.400 94.545,150.479 95.805,150.253 95.805 C 150.016 95.805,149.771 95.915,148.328 96.665 C 147.860 96.908,147.313 97.182,147.112 97.273 C 146.912 97.364,146.365 97.637,145.897 97.881 C 145.429 98.124,144.881 98.397,144.681 98.488 C 144.480 98.579,143.933 98.853,143.465 99.096 C 142.997 99.340,142.395 99.646,142.128 99.777 C 141.860 99.908,141.477 100.108,141.277 100.222 C 141.076 100.336,140.748 100.499,140.547 100.585 C 140.347 100.670,139.854 100.978,139.453 101.269 C 139.052 101.560,138.213 102.041,137.590 102.338 C 136.967 102.636,136.396 103.039,136.321 103.233 C 136.247 103.428,136.030 103.587,135.841 103.587 C 135.550 103.587,132.653 105.358,132.280 105.764 C 132.213 105.837,131.983 106.006,131.768 106.140 C 130.923 106.668,127.533 109.285,127.457 109.470 C 127.412 109.577,127.268 109.666,127.135 109.666 C 126.540 109.666,121.820 113.892,117.087 118.663 C 112.078 123.712,111.261 124.586,110.692 125.504 C 110.412 125.954,109.794 126.699,109.317 127.160 C 108.840 127.621,108.450 128.132,108.450 128.295 C 108.450 128.458,108.365 128.628,108.262 128.673 C 107.951 128.807,105.015 132.816,104.785 133.420 C 104.667 133.729,104.457 133.982,104.317 133.982 C 104.177 133.982,103.932 134.283,103.773 134.650 C 103.614 135.018,103.234 135.628,102.927 136.006 C 102.621 136.385,102.371 136.812,102.371 136.956 C 102.371 137.100,102.086 137.592,101.737 138.049 C 101.389 138.506,100.664 139.720,100.128 140.747 C 99.591 141.774,98.966 142.888,98.738 143.222 C 98.356 143.783,96.170 148.220,95.444 149.909 C 95.271 150.310,94.844 151.251,94.495 152.000 C 94.146 152.749,93.860 153.542,93.860 153.763 C 93.860 153.984,93.764 154.164,93.645 154.164 C 93.527 154.164,93.374 154.410,93.305 154.711 C 93.161 155.340,92.710 156.616,92.240 157.727 C 92.061 158.148,91.915 158.661,91.915 158.867 C 91.915 159.073,91.805 159.309,91.672 159.392 C 91.538 159.475,91.429 159.797,91.429 160.108 C 91.429 160.419,91.265 160.987,91.065 161.370 C 90.866 161.753,90.701 162.252,90.701 162.478 C 90.700 162.704,90.590 162.957,90.456 163.040 C 90.322 163.122,90.213 163.493,90.213 163.864 C 90.213 164.235,90.138 164.614,90.046 164.706 C 89.824 164.927,89.029 167.996,89.011 168.696 C 89.003 168.999,88.893 169.437,88.765 169.669 C 88.508 170.137,88.048 172.415,87.871 174.103 C 87.808 174.705,87.662 175.416,87.548 175.684 C 87.266 176.343,86.617 181.044,86.457 183.587 C 86.385 184.723,86.222 186.529,86.094 187.599 C 85.788 190.163,85.798 198.120,86.112 201.337 C 86.249 202.742,86.453 205.040,86.565 206.444 C 86.838 209.853,87.280 212.835,87.557 213.119 C 87.680 213.246,87.781 213.924,87.781 214.627 C 87.781 215.329,87.883 216.156,88.007 216.463 C 88.131 216.770,88.415 217.897,88.639 218.967 C 89.146 221.396,89.699 223.457,89.990 224.009 C 90.112 224.241,90.213 224.584,90.213 224.771 C 90.213 225.098,90.801 227.195,91.176 228.207 C 91.698 229.617,91.977 230.450,92.089 230.942 C 92.158 231.243,92.311 231.489,92.430 231.489 C 92.548 231.489,92.648 231.681,92.652 231.915 C 92.663 232.514,93.402 234.579,94.046 235.813 C 94.345 236.385,94.590 236.997,94.590 237.173 C 94.590 237.553,99.750 247.882,100.233 248.468 C 100.417 248.692,100.726 249.204,100.919 249.605 C 101.375 250.552,103.155 253.229,103.398 253.333 C 103.502 253.378,103.587 253.532,103.587 253.675 C 103.587 253.819,103.860 254.295,104.195 254.733 C 104.529 255.171,104.802 255.620,104.802 255.731 C 104.802 255.842,105.076 256.227,105.410 256.588 C 105.745 256.948,106.018 257.310,106.018 257.393 C 106.018 257.475,106.443 258.054,106.961 258.680 C 107.480 259.306,107.945 259.938,107.995 260.085 C 108.100 260.395,109.505 262.079,112.158 265.073 C 113.195 266.243,114.043 267.295,114.043 267.411 C 114.043 267.745,120.539 273.957,123.266 276.231 C 124.629 277.368,126.093 278.604,126.519 278.979 C 126.946 279.354,127.842 280.020,128.511 280.459 C 129.179 280.898,129.877 281.439,130.060 281.662 C 130.244 281.885,130.495 282.067,130.618 282.067 C 130.741 282.067,131.137 282.340,131.497 282.675 C 131.858 283.009,132.244 283.283,132.354 283.283 C 132.465 283.283,132.914 283.556,133.352 283.891 C 133.791 284.225,134.226 284.498,134.319 284.498 C 134.413 284.498,134.784 284.772,135.145 285.106 C 135.505 285.441,135.930 285.714,136.088 285.714 C 136.247 285.714,136.685 285.967,137.063 286.275 C 137.441 286.584,138.407 287.157,139.210 287.549 C 140.012 287.942,140.731 288.348,140.807 288.452 C 140.956 288.655,143.088 289.799,145.653 291.053 C 146.523 291.477,147.753 292.091,148.387 292.417 C 149.022 292.743,149.689 293.009,149.871 293.009 C 150.052 293.009,150.716 293.283,151.344 293.617 C 151.973 293.951,152.637 294.225,152.820 294.225 C 153.002 294.225,153.696 294.498,154.362 294.833 C 155.028 295.167,155.775 295.444,156.023 295.448 C 156.271 295.453,156.687 295.617,156.946 295.813 C 157.206 296.010,157.664 296.170,157.965 296.170 C 158.266 296.170,158.580 296.280,158.663 296.413 C 158.745 296.547,159.071 296.657,159.387 296.657 C 159.702 296.657,160.270 296.812,160.649 297.003 C 161.028 297.193,161.830 297.478,162.432 297.635 C 163.033 297.791,163.701 298.009,163.916 298.119 C 164.130 298.229,164.815 298.395,165.438 298.488 C 166.062 298.581,166.631 298.755,166.704 298.873 C 166.777 298.991,167.247 299.088,167.747 299.088 C 168.247 299.088,168.760 299.188,168.888 299.310 C 169.134 299.547,171.496 300.017,173.495 300.226 C 174.164 300.297,174.824 300.446,174.962 300.558 C 175.276 300.813,179.239 301.297,182.614 301.493 C 184.018 301.575,185.314 301.736,185.493 301.851 C 185.918 302.126,319.779 302.047,320.112 301.772 C 320.251 301.657,320.693 301.526,321.094 301.480 C 322.760 301.292,322.787 301.067,322.873 286.565 C 322.964 271.258,322.943 270.923,321.795 269.775 L 320.956 268.936 296.233 268.936 L 271.510 268.936 272.533 267.894 C 273.096 267.320,273.556 266.764,273.556 266.659 C 273.556 266.553,273.967 266.041,274.468 265.521 C 276.001 263.931,276.569 263.271,277.490 262.006 C 277.977 261.337,278.659 260.525,279.005 260.201 C 279.352 259.877,279.635 259.516,279.635 259.400 C 279.635 259.284,279.743 259.057,279.874 258.896 C 280.892 257.645,282.796 254.907,282.796 254.694 C 282.796 254.550,283.070 254.174,283.404 253.860 C 283.739 253.546,284.012 253.157,284.012 252.997 C 284.012 252.836,284.174 252.570,284.371 252.406 C 284.568 252.242,285.001 251.535,285.332 250.835 C 285.663 250.135,286.092 249.431,286.284 249.272 C 286.701 248.925,292.175 237.982,292.411 237.021 C 292.502 236.653,292.673 236.353,292.792 236.353 C 292.912 236.353,293.009 236.163,293.009 235.931 C 293.009 235.698,293.268 234.960,293.584 234.289 C 293.901 233.619,294.348 232.468,294.578 231.733 C 294.808 230.997,295.081 230.176,295.185 229.909 C 295.289 229.641,295.563 228.821,295.793 228.085 C 296.023 227.350,296.300 226.529,296.408 226.261 C 296.792 225.308,297.386 223.159,297.386 222.722 C 297.386 222.478,297.495 222.210,297.629 222.128 C 297.763 222.045,297.872 221.614,297.872 221.170 C 297.872 220.727,298.036 219.971,298.237 219.490 C 298.438 219.010,298.602 218.183,298.602 217.651 C 298.602 217.120,298.711 216.618,298.845 216.535 C 298.979 216.452,299.088 215.892,299.088 215.289 C 299.088 214.686,299.214 213.957,299.369 213.668 C 299.640 213.162,299.843 211.804,300.306 207.416 C 300.425 206.280,300.632 204.584,300.766 203.647 C 301.081 201.438,301.071 187.027,300.754 185.289 C 300.619 184.553,300.424 182.967,300.320 181.763 C 300.025 178.368,299.580 175.255,299.349 174.970 C 299.233 174.828,299.081 174.164,299.011 173.495 C 298.801 171.496,298.331 169.134,298.094 168.888 C 297.972 168.760,297.872 168.419,297.872 168.128 C 297.872 167.838,297.613 166.793,297.296 165.806 C 296.980 164.819,296.530 163.218,296.297 162.247 C 296.064 161.276,295.776 160.422,295.657 160.348 C 295.538 160.275,295.441 159.998,295.441 159.734 C 295.441 159.470,295.167 158.715,294.833 158.055 C 294.498 157.395,294.225 156.639,294.225 156.375 C 294.225 156.111,294.116 155.827,293.982 155.745 C 293.848 155.662,293.739 155.426,293.739 155.220 C 293.739 154.869,293.251 153.605,292.746 152.648 C 292.623 152.415,292.523 152.095,292.523 151.936 C 292.523 151.552,288.208 142.818,287.558 141.888 C 287.016 141.111,286.718 140.587,285.811 138.817 C 285.494 138.200,285.070 137.557,284.867 137.389 C 284.664 137.221,284.498 136.970,284.498 136.832 C 284.498 136.694,284.225 136.222,283.891 135.784 C 283.556 135.346,283.283 134.896,283.283 134.786 C 283.283 134.675,283.009 134.290,282.675 133.929 C 282.340 133.569,282.067 133.173,282.067 133.050 C 282.067 132.926,281.884 132.675,281.661 132.492 C 281.437 132.308,280.949 131.679,280.576 131.092 C 280.203 130.506,279.565 129.661,279.159 129.214 C 278.752 128.768,278.419 128.332,278.419 128.246 C 278.419 128.160,277.872 127.459,277.204 126.687 C 276.535 125.915,275.988 125.162,275.988 125.013 C 275.988 124.639,262.904 111.611,262.528 111.611 C 262.361 111.611,261.628 111.087,260.900 110.448 C 258.576 108.407,255.317 106.018,254.859 106.018 C 254.733 106.018,254.594 105.933,254.549 105.830 C 254.432 105.557,251.480 103.587,251.188 103.587 C 251.053 103.587,250.942 103.487,250.942 103.365 C 250.942 103.243,250.473 102.917,249.900 102.639 C 249.327 102.362,248.505 101.874,248.073 101.556 C 247.642 101.238,244.911 99.807,242.003 98.377 C 239.096 96.947,236.408 95.619,236.029 95.426 C 235.650 95.234,235.189 95.076,235.004 95.076 C 234.819 95.076,234.178 94.802,233.579 94.468 C 232.980 94.134,232.287 93.860,232.038 93.860 C 231.790 93.860,231.483 93.773,231.356 93.667 C 231.229 93.561,230.468 93.274,229.666 93.031 C 228.863 92.787,227.988 92.500,227.720 92.394 C 227.453 92.287,226.632 92.011,225.897 91.781 C 225.161 91.551,224.340 91.274,224.073 91.166 C 223.551 90.956,221.617 90.497,220.426 90.300 C 220.024 90.234,219.477 90.084,219.210 89.967 C 218.504 89.659,216.463 89.208,215.198 89.081 C 214.596 89.021,213.884 88.875,213.617 88.757 C 212.989 88.480,210.310 88.051,207.538 87.784 C 206.334 87.667,204.474 87.457,203.404 87.315 C 200.840 86.976,189.743 86.793,186.505 87.037 M203.283 121.454 C 204.152 121.535,205.082 121.695,205.350 121.810 C 205.951 122.069,209.848 122.796,210.633 122.796 C 210.950 122.796,211.314 122.901,211.442 123.029 C 211.570 123.157,212.550 123.477,213.619 123.741 C 215.627 124.236,216.955 124.652,217.687 125.017 C 217.919 125.133,218.316 125.228,218.569 125.228 C 218.822 125.228,219.165 125.392,219.331 125.593 C 219.498 125.793,219.782 125.957,219.962 125.957 C 220.142 125.957,220.888 126.231,221.619 126.565 C 222.350 126.900,223.036 127.173,223.145 127.173 C 223.475 127.173,229.398 130.188,229.777 130.549 C 229.971 130.734,230.409 131.009,230.749 131.159 C 231.715 131.584,236.907 135.082,237.424 135.656 C 237.678 135.939,237.990 136.170,238.116 136.170 C 239.130 136.170,251.915 148.904,251.915 149.914 C 251.915 150.010,252.216 150.449,252.584 150.890 C 253.713 152.245,254.881 153.896,255.381 154.843 C 255.642 155.339,256.038 155.964,256.259 156.231 C 256.481 156.498,256.875 157.155,257.135 157.690 C 257.396 158.225,257.832 158.990,258.105 159.391 C 258.834 160.459,260.426 163.663,260.426 164.061 C 260.426 164.250,260.681 164.864,260.992 165.424 C 261.304 165.985,261.753 166.991,261.991 167.660 C 262.228 168.328,262.504 169.094,262.603 169.362 C 263.033 170.514,263.394 171.584,263.506 172.036 C 263.573 172.304,263.716 172.742,263.824 173.009 C 264.194 173.927,264.802 176.105,264.802 176.514 C 264.802 176.740,264.901 177.028,265.021 177.155 C 265.141 177.282,265.296 177.824,265.365 178.359 C 265.434 178.894,265.666 180.152,265.881 181.155 C 266.999 186.375,267.264 203.766,266.260 206.079 C 266.060 206.539,265.767 207.957,265.304 210.699 C 265.191 211.368,264.867 212.595,264.586 213.427 C 264.304 214.259,264.073 215.253,264.073 215.636 C 264.073 216.019,263.995 216.410,263.900 216.506 C 263.631 216.774,262.858 218.916,262.857 219.392 C 262.857 219.626,262.748 219.818,262.614 219.818 C 262.480 219.818,262.371 219.982,262.371 220.184 C 262.371 220.385,262.097 221.117,261.763 221.810 C 261.429 222.503,261.155 223.174,261.155 223.301 C 261.155 223.732,257.357 231.118,256.396 232.553 C 255.871 233.339,255.331 234.162,255.198 234.382 C 255.064 234.602,254.708 235.125,254.407 235.544 C 254.106 235.963,253.860 236.407,253.860 236.530 C 253.860 236.653,253.587 237.011,253.252 237.325 C 252.918 237.639,252.644 238.022,252.644 238.175 C 252.644 238.329,252.179 238.951,251.611 239.558 C 251.043 240.165,250.110 241.261,249.539 241.994 C 248.101 243.838,241.409 250.383,239.635 251.679 C 238.833 252.265,238.067 252.838,237.933 252.952 C 237.126 253.642,233.739 256.107,233.435 256.226 C 233.234 256.305,232.563 256.734,231.943 257.181 C 231.323 257.628,230.653 257.994,230.453 257.994 C 230.253 257.994,229.954 258.158,229.787 258.359 C 229.621 258.559,229.391 258.723,229.276 258.723 C 229.161 258.723,228.469 259.106,227.737 259.574 C 227.005 260.043,226.349 260.426,226.280 260.426 C 226.119 260.426,223.719 261.487,222.124 262.263 C 221.453 262.590,220.753 262.857,220.567 262.857 C 220.382 262.857,219.673 263.114,218.991 263.428 C 218.309 263.742,217.149 264.189,216.413 264.421 C 215.678 264.654,214.857 264.936,214.590 265.050 C 214.322 265.163,213.775 265.303,213.374 265.360 C 212.510 265.484,210.415 266.006,209.726 266.269 C 209.459 266.371,208.091 266.642,206.687 266.870 C 205.283 267.099,203.830 267.379,203.459 267.492 C 201.164 268.196,185.674 267.937,181.641 267.127 C 180.638 266.925,179.325 266.694,178.723 266.613 C 178.122 266.532,177.410 266.380,177.143 266.274 C 176.369 265.970,174.544 265.502,173.617 265.371 C 173.149 265.305,172.421 265.095,172.000 264.905 C 171.578 264.715,171.065 264.559,170.859 264.559 C 170.653 264.559,170.417 264.450,170.334 264.316 C 170.252 264.182,169.921 264.073,169.599 264.073 C 169.277 264.073,168.524 263.799,167.925 263.465 C 167.326 263.131,166.675 262.857,166.477 262.857 C 166.279 262.857,165.316 262.467,164.335 261.990 C 163.355 261.513,162.225 260.981,161.824 260.808 C 160.175 260.098,159.608 259.810,159.075 259.414 C 158.766 259.184,158.000 258.752,157.372 258.453 C 156.745 258.154,155.922 257.655,155.544 257.344 C 155.166 257.033,154.743 256.778,154.604 256.778 C 154.465 256.778,153.829 256.395,153.191 255.927 C 152.554 255.459,151.944 255.076,151.837 255.076 C 151.730 255.076,151.123 254.638,150.489 254.103 C 149.854 253.568,149.266 253.131,149.182 253.131 C 149.098 253.131,148.544 252.676,147.951 252.120 C 147.357 251.564,146.516 250.896,146.080 250.635 C 145.056 250.023,137.387 242.318,137.384 241.899 C 137.383 241.724,136.840 241.033,136.178 240.365 C 135.516 239.696,134.970 239.026,134.965 238.875 C 134.959 238.724,134.781 238.456,134.568 238.280 C 134.130 237.917,130.091 231.892,130.091 231.602 C 130.091 231.499,129.841 231.075,129.534 230.661 C 129.042 229.996,126.689 225.365,126.187 224.073 C 126.083 223.805,125.726 222.985,125.394 222.249 C 125.063 221.514,124.601 220.310,124.368 219.574 C 124.136 218.839,123.861 218.018,123.756 217.751 C 123.652 217.483,123.380 216.663,123.152 215.927 C 122.924 215.191,122.641 214.400,122.524 214.167 C 122.406 213.935,122.309 213.443,122.309 213.073 C 122.308 212.704,122.144 212.088,121.944 211.705 C 121.744 211.322,121.581 210.644,121.581 210.199 C 121.581 209.754,121.471 209.323,121.337 209.240 C 121.204 209.157,121.094 208.553,121.094 207.897 C 121.094 207.241,120.940 206.235,120.752 205.662 C 120.045 203.509,119.764 190.970,120.321 186.383 C 120.756 182.794,121.125 180.573,121.359 180.125 C 121.481 179.893,121.581 179.325,121.581 178.863 C 121.581 178.401,121.680 177.961,121.803 177.885 C 121.925 177.810,122.100 177.284,122.193 176.716 C 122.482 174.942,123.519 171.354,123.834 171.039 C 123.932 170.941,124.012 170.622,124.012 170.330 C 124.012 170.038,124.286 169.284,124.620 168.656 C 124.954 168.027,125.228 167.364,125.228 167.182 C 125.228 166.823,130.078 157.037,130.355 156.839 C 130.448 156.772,130.759 156.265,131.047 155.713 C 131.334 155.161,131.783 154.515,132.046 154.277 C 132.308 154.040,132.523 153.722,132.523 153.571 C 132.523 153.420,132.735 153.027,132.995 152.697 C 133.998 151.422,135.579 149.323,135.927 148.803 C 136.929 147.306,144.689 139.351,146.353 138.116 C 146.803 137.781,147.346 137.316,147.561 137.082 C 147.775 136.848,148.068 136.657,148.213 136.657 C 148.358 136.657,148.847 136.274,149.301 135.805 C 149.755 135.337,150.241 134.954,150.382 134.954 C 150.523 134.954,150.967 134.683,151.368 134.351 C 152.561 133.365,153.270 132.890,154.066 132.543 C 154.346 132.420,154.729 132.170,154.917 131.987 C 155.105 131.803,155.970 131.286,156.839 130.839 C 157.708 130.391,158.474 129.958,158.541 129.876 C 158.724 129.651,159.533 129.179,160.486 128.740 C 160.954 128.525,161.502 128.251,161.702 128.132 C 162.374 127.734,163.515 127.236,164.742 126.806 C 165.410 126.572,166.061 126.285,166.188 126.169 C 166.316 126.052,166.589 125.957,166.796 125.956 C 167.004 125.956,167.712 125.682,168.369 125.349 C 169.027 125.015,169.793 124.738,170.072 124.734 C 170.350 124.730,170.790 124.566,171.050 124.369 C 171.309 124.173,171.916 124.012,172.399 124.012 C 172.882 124.012,173.381 123.925,173.508 123.819 C 173.916 123.477,176.349 122.825,178.723 122.420 C 179.994 122.203,181.285 121.926,181.592 121.803 C 181.899 121.681,182.720 121.570,183.416 121.556 C 184.112 121.543,184.954 121.442,185.289 121.331 C 185.947 121.114,200.695 121.215,203.283 121.454 " stroke="none" fill="#040404" fill-rule="evenodd"/></svg>
    <svg height="135" width="135" viewBox="0 0 1000 1000" class="small-circle svg"><path xmlns="http://www.w3.org/2000/svg" style="fill:#ededed; stroke:none;" d="M456 954L455.999 938C455.986 936.008 456.301 933.282 454.972 931.603C453.594 929.862 450.977 930.062 448.999 929.835C443.991 929.258 438.987 928.463 434 927.728C414.788 924.898 395.564 920.733 377 915.025C300.826 891.602 231.835 849.314 178.17 790C106.263 710.526 63.7248 603.522 65.0039 496C65.7806 430.71 81.6532 365.691 110.259 307C130.156 266.177 157.727 228.746 189.039 196C222.33 161.185 262.986 132.26 306 110.753C345.737 90.8846 389.756 75.6209 434 70L434 48C417.656 48.1353 400.764 53.1855 385 57.1265C338.501 68.7513 294.622 88.2739 254 113.576C215.656 137.46 181.298 167.82 151.87 202C33.2034 339.827 7.62905 544.971 91.2585 707C112.853 748.839 140.699 787.699 174 821C210.688 857.688 253.047 888.542 300 910.781C332.493 926.171 365.923 937.713 401 945.65C418.745 949.666 437.768 953.624 456 954z"/></svg>
    <svg height="180" width="180" viewBox="0 0 1000 1000" class="big-circle svg"><path xmlns="http://www.w3.org/2000/svg" style="fill:#ededed; stroke:none;" d="M454 952L454 887C441.324 886.456 428.346 883.444 416 880.65C389.799 874.722 364.497 866.349 340 855.306C205.92 794.861 116.45 660.408 110.039 514C108.593 480.976 112.302 447.246 119.424 415C144.931 299.518 226.1 198.275 333 147.781C389.157 121.255 450.99 108.496 513 110.015C612.241 112.446 711.495 157.399 779.961 229C839.544 291.312 879.215 372.892 887.831 459C893.323 513.894 887.624 569.466 870.329 622C836.537 724.647 758.42 810.937 660 855.306C635.503 866.349 610.201 874.722 584 880.65C571.383 883.505 557.974 886.732 545 887L545 952C562.916 951.63 581.566 947.595 599 943.65C637.149 935.018 673.043 921.725 708 904.247C753.184 881.655 792.42 850.594 828 815C859.416 783.572 885.414 745.666 905.247 706C933.723 649.048 949.566 588.445 953.911 525C963.014 392.066 906.622 254.399 808 165.17C769.47 130.31 725.8 101.975 678 81.5787C629.733 60.9833 575.64 47.3041 523 46.0146C469.032 44.6927 415.748 49.9443 364 66.0255C223.375 109.726 109.726 223.376 66.0255 364C14.4181 530.066 63.7205 715.347 191 833.911C229.196 869.491 274.051 897.962 322 918.421C362.806 935.833 409.371 950.084 454 952z"/></svg>
    <svg height="220" width="220" viewBox="0 0 1000 1000" class="outer-circle svg"><path xmlns="http://www.w3.org/2000/svg" style="fill:#ededed; stroke:none;" d="M456 954L456 946C438.715 945.258 420.843 941.462 404 937.65C369.403 929.822 335.739 918.116 304 902.247C255.981 878.237 211.768 846.374 175.09 807C62.5744 686.214 23.1598 509.033 78.6921 353C96.4653 303.062 122.84 256.974 156.424 216C207.709 153.43 278.099 103.658 355 78C372.453 72.1767 389.992 67.0399 408 63.2107C413.31 62.0816 418.647 60.9853 424 60.0811C426.508 59.6575 430.352 59.6852 432.397 57.9869C434.897 55.9098 434 50.8766 434 48C417.656 48.1353 400.764 53.1855 385 57.1265C338.517 68.7473 294.608 88.2827 254 113.576C215.673 137.45 181.285 167.835 151.87 202C33.9725 338.933 8.37009 541.243 89.2485 703C110.949 746.4 139.693 786.693 174 821C210.688 857.688 253.047 888.542 300 910.781C332.484 926.167 365.934 937.716 401 945.65C418.745 949.666 437.768 953.624 456 954z"/></svg>
    <div style="position: absolute;bottom: 0;right: 0;padding: 10px;color: #4f4f4f;text-anchor: middle;font-size: 20px;">v1.32</div></div>`
  );
  var html = document.getElementsByTagName("html")[0];
  html.append(loadinghtml.firstChild);
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function SetDisplayNone(ElementName) {
  return `li[data-key=${ElementName}]{display:none !important;}`;
}

function ApplyCSSToHiddenMenuItems() {
  var stylesheetInnerText = "";
  chrome.storage.local.get(null, function (result) {
    for (let i = 0; i < Object.keys(result.menuitems).length; i++) {
      if (!Object.values(result.menuitems)[i]) {
        stylesheetInnerText += SetDisplayNone(Object.keys(result.menuitems)[i]);
        console.log(
          `[BetterSEQTA] Hiding ${Object.keys(result.menuitems)[i]} menu item`
        );
      }
    }
    MenuItemStyle = document.createElement("style");
    MenuItemStyle.innerText = stylesheetInnerText;
    document.head.appendChild(MenuItemStyle);
  });
}

async function finishLoad() {
  var container = document.getElementById("container");
  container.style.bottom = "0px";
  var loadingbk = document.getElementById("loading");
  loadingbk.style.opacity = "0";
  await delay(501);
  loadingbk.remove();
}

function CreateBackground() {
  // Creating and inserting 3 divs containing the background applied to the pages
  var bklocation = document.getElementById("container");
  var menu = document.getElementById("menu");
  var bk = document.createElement("div");
  bk.classList.add("bg");

  bklocation.insertBefore(bk, menu);

  var bk2 = document.createElement("div");
  bk2.classList.add("bg");
  bk2.classList.add("bg2");
  bklocation.insertBefore(bk2, menu);

  var bk3 = document.createElement("div");
  bk3.classList.add("bg");
  bk3.classList.add("bg3");
  bklocation.insertBefore(bk3, menu);
}

function waitForElm(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}
var LoadingDone = false;

function CheckiFrameItems() {
  // Injecting CSS File to the webpage to overwrite iFrame default CSS
  var cssFile = chrome.runtime.getURL("inject/iframe.css");
  var fileref = document.createElement("link");
  fileref.setAttribute("rel", "stylesheet");
  fileref.setAttribute("type", "text/css");
  fileref.setAttribute("href", cssFile);

  const observer = new MutationObserver(function (mutations_list) {
    mutations_list.forEach(function (mutation) {
      mutation.addedNodes.forEach(function (added_node) {
        if (added_node.tagName == "IFRAME") {
          added_node.addEventListener("load", function () {
            added_node.contentDocument.documentElement.childNodes[1].style.color = "white"
            if (
              !added_node.contentDocument.documentElement.firstChild.innerHTML.includes(
                "iframe.css"
              )
            ) {
              added_node.contentDocument.documentElement.firstChild.appendChild(
                fileref
              );
            }
          });
        }
      });
    });
  });

  observer.observe(document.body, {
    subtree: true,
    childList: true,
  });
}

function tryLoad() {
  waitForElm(".day-container").then((elm) => {
    LoadingDone = true;
    finishLoad();
  });

  waitForElm("[data-key=welcome]").then((elm) => {
    elm.classList.remove('active')
  });

  waitForElm(".code").then((elm) => {
    AddBetterSEQTAElements(true);
    var weblink = window.location.href.split("/")[2];
    window.location.replace("https://" + weblink + "/#?page=/home");
    LoadInit();
  });

  // Waits for page to call on load, run scripts
  document.addEventListener(
    "load",
    function () {
      CheckiFrameItems();
    },
    true
  );
}

function AppendElementsToDisabledPage(){
  AddBetterSEQTAElements(false);

  settingsStyle = document.createElement('style')
  settingsStyle.innerText = `
    .addedButton {
    position: absolute !important;
    right: 50px;
    width: 35px;
    height: 35px;
    padding: 6px !important;
    overflow: unset !important;
    border-radius: 50%;
    margin: 7px !important;
    cursor: pointer;
    color: white !important;
  }
  .addedButton svg {
    margin: 6px;
  }
  .outside-container {
    top: 48px !important;
  }
  `
  document.head.append(settingsStyle)
}

function RunFunctionOnTrue(storedSetting) {
  // If the option is 'on', open BetterSEQTA
  if (typeof storedSetting.onoff == 'undefined'){
    chrome.runtime.sendMessage({type: "setDefaultStorage"});
  }
  if (storedSetting.onoff) {
    console.log("[BetterSEQTA] Enabled");
    // Injecting CSS File to the webpage to overwrite SEQTA's default CSS
    var cssFile = chrome.runtime.getURL("inject/injected.css");
    var fileref = document.createElement("link");
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", cssFile);
    document.head.appendChild(fileref);

    ApplyCSSToHiddenMenuItems();

    loading();
    if (!isChrome || isChrome == "undefined") {
      tryLoad();
    }

    window.addEventListener("load", function () {
      tryLoad();
    });
  }
  else {
    if (!isChrome || isChrome == "undefined") {
      waitForElm(".code").then((elm) => {
        AppendElementsToDisabledPage();
      });
    }
    window.addEventListener("load", function () {
      waitForElm(".code").then((elm) => {
        AppendElementsToDisabledPage();
      });

    });
  };
}
var NonSEQTAPage = false;
var IsSEQTAPage = false;
document.addEventListener(
  "load",
  function () {
    if (document.childNodes[1].textContent.includes("SEQTA") && !IsSEQTAPage) {
      IsSEQTAPage = true;
      console.log("[BetterSEQTA] Verified SEQTA Page");
      chrome.storage.local.get(null, function (items) {
        RunFunctionOnTrue(items);
      });
    }
    if (
      !document.childNodes[1].textContent.includes("SEQTA") &&
      !NonSEQTAPage
    ) {
      document.head.insertAdjacentHTML(
        "beforeend",
        `<style>html{background-color:unset !important}</style>`
      );
      NonSEQTAPage = true;
    }
  },
  true
);

function RunExtensionSettingsJS(){

const onoffselection = document.querySelector("#onoff");
const notificationcollector = document.querySelector("#notification");
const lessonalert = document.querySelector("#lessonalert");
const sidemenusection = document.querySelector("#sidemenusection");
const shortcutsection = document.querySelector("#shortcutsection");
const mainpage = document.querySelector("#mainpage");

const menupage = document.querySelector("#menupage");
const menuback = document.querySelector("#menuback");

const shortcutpage = document.querySelector("#shortcutpage");
const shortcutback = document.querySelector("#shortcutback");

var applybuttons = document.getElementsByClassName("apply-changes");
var menubuttons = document.getElementsByClassName("menuitem");
var shortcutbuttons = document.getElementsByClassName("shortcutitem");

const github = document.getElementById("github");

function openGithub() {
  chrome.runtime.sendMessage({type: "githubTab"});
  
}

function openMenuPage() {
  mainpage.style.left = "-350px";
  menupage.style.right = "0px";
}

function backFromMenu() {
  mainpage.style.left = "0px";
  menupage.style.right = "-350px";
}

function openShortcutPage() {
  mainpage.style.left = "-350px";
  shortcutpage.style.right = "0px";
}

function backFromShortcut() {
  mainpage.style.left = "0px";
  shortcutpage.style.right = "-350px";
}

function FindSEQTATab() {
  chrome.runtime.sendMessage({type: "reloadTabs", });
}
/*
Store the currently selected settings using chrome.storage.local.
*/
function storeSettings() {
  chrome.storage.local.set({ onoff: onoffselection.checked }, function () {
    FindSEQTATab();
  });
}

function storeNotificationSettings() {
  chrome.storage.local.set(
    { notificationcollector: notificationcollector.checked });
    chrome.storage.local.set({ lessonalert: lessonalert.checked });
}

function StoreAllSettings() {
  chrome.storage.local.get(["menuitems"], function (result) {
    var menuItems = result.menuitems;
    console.log(result.menuitems);
    for (var i = 0; i < menubuttons.length; i++) {
      var id = menubuttons[i].id;

      menuItems[id] = menubuttons[i].checked;
      console.log(menuItems[id]);
    }
    chrome.storage.local.set({ menuitems: menuItems });
  });
  
  chrome.storage.local.get(["shortcuts"], function (result) {
    var shortcuts = Object.values(result)[0];
    console.log(shortcuts);
    for (var i = 0; i < shortcutbuttons.length; i++) {
      shortcuts[i].enabled = shortcutbuttons[i].checked;
    }
    chrome.storage.local.set({ shortcuts: shortcuts });
  });

  FindSEQTATab();

  
}
/*
Update the options UI with the settings values retrieved from storage,
or the default settings if the stored settings are empty.
*/
function updateUI(restoredSettings) {
  if (typeof restoredSettings.onoff == 'undefined') {
    chrome.runtime.sendMessage({type: "setDefaultStorage"});

    chrome.storage.local.get(null, function (result) {
      updateUI(result);
    });
  } else {
    onoffselection.checked = restoredSettings.onoff;
    notificationcollector.checked = restoredSettings.notificationcollector;
    lessonalert.checked = restoredSettings.lessonalert;
    chrome.storage.local.get(["menuitems"], function (result) {
      var menuItems = Object.values(result)[0];
      for (var i = 0; i < menubuttons.length; i++) {
        var id = menubuttons[i].id;
        menubuttons[i].checked = menuItems[id];
      }
    });

    chrome.storage.local.get(["shortcuts"], function (result) {
      var shortcuts = Object.values(result)[0];
      for (var i = 0; i < shortcutbuttons.length; i++) {
        shortcutbuttons[i].checked = shortcuts[i].enabled;
      }
      chrome.storage.local.set({ shortcuts: shortcuts });
    });
  }
}

function onError(e) {
  console.error(e);
}
chrome.storage.local.get(null, function (result) {
  updateUI(result);
});

github.addEventListener("click", openGithub);

sidemenusection.addEventListener("click", openMenuPage);
menuback.addEventListener("click", backFromMenu);

shortcutsection.addEventListener("click", openShortcutPage);
shortcutback.addEventListener("click", backFromShortcut);

for (var i = 0; i < applybuttons.length; i++) {
  applybuttons[i].addEventListener(
    "click",
    StoreAllSettings.bind(applybuttons[i], i)
  );
}

onoffselection.addEventListener("change", storeSettings);
notificationcollector.addEventListener(
  "change",
  storeNotificationSettings
);
lessonalert.addEventListener("change", storeNotificationSettings)

}

function CallExtensionSettings(){
  // Injecting CSS File to the webpage to overwrite iFrame default CSS
  var cssFile = chrome.runtime.getURL("popup/info.css");
  var fileref = document.createElement("link");
  fileref.setAttribute("rel", "stylesheet");
  fileref.setAttribute("type", "text/css");
  fileref.setAttribute("href", cssFile);
  document.head.append(fileref)

  NextPageImage = chrome.runtime.getURL('popup/page.png')
  Settings = stringToHTML(`<div class="outside-container hidden" id="ExtensionPopup"><div class="logo-container"><img src=${chrome.runtime.getURL('icons/betterseqta-light-full.png')}></div>
  <div class="main-page" id="mainpage">
  <div class="selector-container">
  <div class="item-container offontoggle"><h1 class="item main">Toggle BetterSEQTA</h1><div class="checkbox-container"><input class="toggle offon" type="checkbox" id="onoff"></div></div>
  <div class="item-container clickable" id="sidemenusection"><div class="text-container"><h1 class="addonitem">Side Menu Items</h1><p class="item subitem">Choose which items to keep on the side menu.</p></div><div class="checkbox-container"><img src="${NextPageImage}" alt="" width="20px" height="20px"></div></div>
  <div class="item-container clickable" id="shortcutsection"><div class="text-container"><h1 class="addonitem">Shortcut Items</h1><p class="item subitem">Choose which shortcuts to use on the Home Page.</p></div><div class="checkbox-container"><img src="${NextPageImage}" alt="" width="20px" height="20px"></div></div>
  <div class="item-container"><div class="text-container"><h1 class="addonitem">Lesson Alerts</h1><p class="item subitem">Sends a native browser notification ~5 minutes prior to lessons.</p></div><div class="checkbox-container"><input class="toggle notification" type="checkbox" id="lessonalert"></div></div>
  <div class="item-container"><div class="text-container"><h1 class="addonitem">Notification Collector</h1><p class="item subitem">Uncaps the 9+ limit for notifications, showing the real number.</p></div><div class="checkbox-container"><input class="toggle notification" type="checkbox" id="notification"></div></div>
  <div class="apply-changes">Apply Changes</div>
  </div>
</div>

<div class="menu-page" id="menupage">
  <div class="selector-container" style="margin-bottom: 0;">
    <div class="item-container" style="border-bottom: none; height: 2em;"><h1 class="item menumain" style="width: 100%;">Hide/Show Menu Items</h1></div>
    <div class="menu-item-selection">
    <div class="item-container menushortcuts"><div class="text-container"><h1 class="addonitem">Welcome</h1></div><div class="checkbox-container"><input class="toggle notification menuitem" type="checkbox" id="welcome"></div></div>
    <div class="item-container menushortcuts"><div class="text-container"><h1 class="addonitem">Portals</h1></div><div class="checkbox-container"><input class="toggle notification menuitem" type="checkbox" id="portals"></div></div>
    <div class="item-container menushortcuts"><div class="text-container"><h1 class="addonitem">Dashboard</h1></div><div class="checkbox-container"><input class="toggle notification menuitem" type="checkbox" id="dashboard"></div></div>
    <div class="item-container menushortcuts"><div class="text-container"><h1 class="addonitem">Forums</h1></div><div class="checkbox-container"><input class="toggle notification menuitem" type="checkbox" id="forums"></div></div>
    <div class="item-container menushortcuts"><div class="text-container"><h1 class="addonitem">Settings</h1></div><div class="checkbox-container"><input class="toggle notification menuitem" type="checkbox" id="settings"></div></div>
    
  </div>
</div>
<div style="display: flex; color: white; justify-content: space-around;">
  <div class="back-button" id="menuback"><img src="${NextPageImage}" alt="" width="20px" height="20px">Back</div>
  <div class="apply-changes" style="margin-top: 10px;">Apply Changes</div>
</div>
</div>

<div class="menu-page" id="shortcutpage">
  <div class="selector-container" style="margin-bottom: 0;">
    <div class="item-container" style="border-bottom: none; height: 2em;"><h1 class="item menumain" style="width: 100%;">Select Shortcuts for Home</h1></div>
    <div class="menu-item-selection">
    <div class="item-container menushortcuts"><div class="text-container"><h1 class="addonitem">YouTube</h1></div><div class="checkbox-container"><input class="toggle notification shortcutitem" type="checkbox" id="youtube"></div></div>
    <div class="item-container menushortcuts"><div class="text-container"><h1 class="addonitem">Outlook</h1></div><div class="checkbox-container"><input class="toggle notification shortcutitem" type="checkbox" id="outlook"></div></div>
    <div class="item-container menushortcuts"><div class="text-container"><h1 class="addonitem">Office</h1></div><div class="checkbox-container"><input class="toggle notification shortcutitem" type="checkbox" id="office"></div></div>
    <div class="item-container menushortcuts"><div class="text-container"><h1 class="addonitem">Spotify</h1></div><div class="checkbox-container"><input class="toggle notification shortcutitem" type="checkbox" id="spotify"></div></div>
    <div class="item-container menushortcuts"><div class="text-container"><h1 class="addonitem">Google</h1></div><div class="checkbox-container"><input class="toggle notification shortcutitem" type="checkbox" id="google"></div></div>
    <div class="item-container menushortcuts"><div class="text-container"><h1 class="addonitem">DuckDuckGo</h1></div><div class="checkbox-container"><input class="toggle notification shortcutitem" type="checkbox" id="duckduckgo"></div></div>
    <div class="item-container menushortcuts"><div class="text-container"><h1 class="addonitem">Cool Math Games</h1></div><div class="checkbox-container"><input class="toggle notification shortcutitem" type="checkbox" id="coolmathgames"></div></div>
    <div class="item-container menushortcuts"><div class="text-container"><h1 class="addonitem">SACE</h1></div><div class="checkbox-container"><input class="toggle notification shortcutitem" type="checkbox" id="sace"></div></div>
    <div class="item-container menushortcuts"><div class="text-container"><h1 class="addonitem">Google Scholar</h1></div><div class="checkbox-container"><input class="toggle notification shortcutitem" type="checkbox" id="googlescholar"></div></div>
    <div class="item-container menushortcuts"><div class="text-container"><h1 class="addonitem">Gmail</h1></div><div class="checkbox-container"><input class="toggle notification shortcutitem" type="checkbox" id="gmail"></div></div>
  </div>
</div>
<div style="display: flex; color: white; justify-content: space-around;">
  <div class="back-button" id="shortcutback"><img src="${NextPageImage}" alt="" width="20px" height="20px">Back</div>
  <div class="apply-changes" style="margin-top: 10px;">Apply Changes</div>
</div>
</div>

  <div class="bottom-container"><div>Created by Nulkem</div><img src=${chrome.runtime.getURL('/popup/github.svg')} alt="" id="github"></div></div>`)
  document.body.append(Settings.firstChild)

  RunExtensionSettingsJS();

  var container = document.getElementById('container');
  var extensionsettings = document.getElementById('ExtensionPopup');
  container.onclick = function(){
    if (!SettingsClicked){
      extensionsettings.classList.add('hidden');
    }
    SettingsClicked = false
  }


}


function AddBetterSEQTAElements(toggle) {
  var code = document.getElementsByClassName("code")[0];
  // Replaces students code with the version of BetterSEQTA
  if (code != null) {
    if (!code.innerHTML.includes("BetterSEQTA")) {
      code.innerHTML = "BetterSEQTA v1.32";

      if (toggle){
         // Creates Home menu button and appends it as the first child of the list
        CreateBackground();
        var NewButtonStr = `<li class="item" data-key="home" id="homebutton" data-path="/home"><label><svg width="24" height="24" viewBox="0 0 400 400"><g style="fill: currentcolor;"><g><path d="M191.540 1.929 C 188.821 2.547,184.505 4.211,181.949 5.627 C 176.214 8.805,3.477 152.579,1.452 155.859 C -3.707 164.219,2.514 174.994,12.500 174.994 C 18.353 174.994,11.310 180.532,107.805 100.061 C 199.964 23.206,197.279 25.249,203.300 27.393 C 205.436 28.154,229.584 47.783,278.205 88.281 L 349.957 148.047 349.960 254.688 C 349.963 362.177,349.874 365.669,347.041 369.471 C 343.191 374.635,343.559 374.585,307.617 374.844 L 275.000 375.079 275.000 302.844 C 275.000 217.447,275.473 221.245,263.433 209.983 C 252.763 200.003,252.746 200.000,200.000 200.000 C 147.254 200.000,147.237 200.003,136.567 209.983 C 124.527 221.245,125.000 217.447,125.000 302.844 L 125.000 375.079 92.383 374.844 C 56.441 374.585,56.809 374.635,52.959 369.471 C 50.171 365.729,50.037 361.891,50.016 284.766 C 49.995 209.763,49.963 208.151,48.442 205.657 C 43.742 197.949,31.258 197.949,26.558 205.657 C 24.188 209.545,24.115 366.549,26.480 374.148 C 30.063 385.661,39.956 395.389,51.509 398.761 C 57.984 400.651,342.016 400.651,348.491 398.761 C 360.044 395.389,369.937 385.661,373.520 374.148 C 374.940 369.585,375.000 365.342,375.000 269.366 L 375.000 169.341 376.758 170.626 C 382.018 174.472,383.303 174.994,387.500 174.994 C 395.341 174.994,399.994 170.341,399.994 162.500 C 399.994 155.980,399.648 155.628,364.197 126.172 L 331.290 98.828 331.267 75.391 C 331.239 46.356,330.210 43.756,318.750 43.756 C 308.785 43.756,306.759 47.089,306.250 64.320 L 305.859 77.545 264.453 43.002 C 212.011 -0.748,209.516 -2.153,191.540 1.929 M242.887 226.953 C 250.178 231.247,249.960 228.796,249.981 306.836 L 250.000 375.000 199.980 375.000 L 149.960 375.000 150.175 304.883 C 150.415 226.874,150.053 232.041,155.565 227.933 C 159.111 225.290,161.987 225.123,201.563 225.258 C 238.701 225.385,240.340 225.453,242.887 226.953 M180.657 289.058 C 169.777 295.692,174.683 312.494,187.500 312.494 C 195.341 312.494,199.994 307.841,199.994 300.000 C 199.994 292.159,195.341 287.506,187.500 287.506 C 184.587 287.506,182.383 288.006,180.657 289.058 "></path></g></g></svg>Home</label></li>`;
        var NewButton = stringToHTML(NewButtonStr);
        var menu = document.getElementById("menu");
        var List = menu.firstChild;
        List.insertBefore(NewButton.firstChild, List.firstChild);

        // Creates the home container when the menu button is pressed
        var homebutton = document.getElementById("homebutton");
        homebutton.addEventListener("click", function () {
          SendHomePage();
        });
      }


      CallExtensionSettings();

      // Creates settings and dashboard buttons next to alerts
      var SettingsButton = stringToHTML(
        `<button class="addedButton" id="AddedSettings""><svg width="24" height="24" viewBox="0 0 24 24"><g style="fill: currentcolor;"><g><path d="M23.182,6.923c-.29,0-3.662,2.122-4.142,2.4l-2.8-1.555V4.511l4.257-2.456a.518.518,0,0,0,.233-.408.479.479,0,0,0-.233-.407,6.511,6.511,0,1,0-3.327,12.107,6.582,6.582,0,0,0,6.148-4.374,5.228,5.228,0,0,0,.333-1.542A.461.461,0,0,0,23.182,6.923Z"></path><path d="M9.73,10.418,7.376,12.883c-.01.01-.021.016-.03.025L1.158,19.1a2.682,2.682,0,1,0,3.793,3.793l4.583-4.582,0,0,4.1-4.005-.037-.037A9.094,9.094,0,0,1,9.73,10.418ZM3.053,21.888A.894.894,0,1,1,3.946,21,.893.893,0,0,1,3.053,21.888Z"></path></g></g></svg></button>`
      );
      var ContentDiv = document.getElementById("content");
      ContentDiv.append(SettingsButton.firstChild);

      var AddedSettings = document.getElementById("AddedSettings");
      var extensionsettings = document.getElementById("ExtensionPopup")
      AddedSettings.addEventListener("click", function () {
        extensionsettings.classList.toggle('hidden');
        SettingsClicked = true        
      });
    }
  }
}

function GetTimeString() {
  // Gets the current time and creates a string for the home page
  const current = new Date();
  let hour = current.getHours();
  if (hour >= 12 && hour < 16) {
    var TimeText = "Good Afternoon, ";
  } else if (hour >= 16 && hour <= 23) {
    var TimeText = "Good Evening, ";
  } else if (hour >= 0 && hour <= 11) {
    var TimeText = "Good Morning, ";
  }
  return TimeText;
}
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function ChangeCurrentPage(newpage) {
  var weblink = window.location.href.split("/")[2];
  window.location.replace("https://" + weblink + "/#?page=/" + newpage);
}

function CheckCurrentLesson(lesson, num) {
  var startTime = lesson.from;
  var endTime = lesson.until;
  // Gets current time
  currentDate = new Date();

  // Takes start time of current lesson and makes it into a Date function for comparison
  startDate = new Date(currentDate.getTime());
  startDate.setHours(startTime.split(":")[0]);
  startDate.setMinutes(startTime.split(":")[1]);
  startDate.setSeconds("00");

  // Takes end time of current lesson and makes it into a Date function for comparison
  endDate = new Date(currentDate.getTime());
  endDate.setHours(endTime.split(":")[0]);
  endDate.setMinutes(endTime.split(":")[1]);
  endDate.setSeconds("00");

  // Gets the difference between the start time and current time
  var difference = startDate.getTime() - currentDate.getTime();
  // Converts the difference into minutes
  var minutes = Math.floor(difference / 1000 / 60);

  // Checks if current time is between the start time and end time of current tested lesson
  valid = startDate < currentDate && endDate > currentDate;

  id = lesson.code + num

  if (valid) {
    // Apply the activelesson class to increase the box-shadow of current lesson
    
    var elementA = document.getElementById(id);
    elementA.classList.add("activelesson");
  } else {
    // Removes the activelesson class to ensure only the active lesson have the class
    var elementA = document.getElementById(id);
    if (elementA != null) {
      elementA.classList.remove("activelesson");
    }
  }

  // If 5 minutes before the start of another lesson:
  if (minutes == 5) {
    chrome.storage.local.get('lessonalert', function(result){
      if (result.lessonalert){
        // Checks if notifications are supported
        if (!window.Notification) {
          console.log("Browser does not support notifications.");
        } else {
          // check if permission is already granted
          if (Notification.permission === "granted") {
            // show notification here
            var notify = new Notification("Next Lesson in 5 Minutes:", {
              body:
                "Subject: " +
                lesson.description +
                " \nRoom: " +
                lesson.room +
                " \nTeacher: " +
                lesson.staff,
            });
          } else {
            // request permission from user
            Notification.requestPermission()
              .then(function (p) {
                if (p === "granted") {
                  // show notification here
                  var notify = new Notification("Next Lesson in 5 Minutes:", {
                    body:
                      "Subject: " +
                      lesson.description +
                      " \nRoom: " +
                      lesson.room +
                      " \nTeacher: " +
                      lesson.staff,
                  });
                } else {
                  console.log("User blocked notifications.");
                }
              })
              .catch(function (err) {
                console.error(err);
              });
          }
        }
        }
    });

  }

}

function CheckCurrentLessonAll(lessons) {
  // Checks each lesson and sets an interval to run every 60 seconds to continue updating
  setInterval(
    function () {
      for (i = 0; i < 5; i++) {
        CheckCurrentLesson(lessons[i], i+1);
      }
    }.bind(lessons),
    60000
  );
}

function SendHomePage() {
  setTimeout(function () {
    // Sends the html data for the home page
    console.log("[BetterSEQTA] Started Loading Home Page");
    document.title = "Home ― SEQTA Learn";
    var element = document.querySelector("[data-key=home]");

    // Apply the active class to indicate clicked on home button
    element.classList.add("active");

    // Remove all current elements in the main div to add new elements
    var main = document.getElementById("main");
    main.innerHTML = "";

    // Gets the current time string e.g. (Good Morning)
    var timeString = GetTimeString();

    // Gets the student name from pre-existing element on page
    var UsersName = document.getElementsByClassName("name")[0];
    // Gets the students first name
    var FirstName = UsersName.innerHTML.replace(/ .*/, "");

    // Creates the root of the home page added to the main div
    var htmlStr =
      `<div class="home-root"><div class="home-container" id="home-container"><h1>` +
      timeString +
      FirstName +
      `!</h1></div></div>`;

    var html = stringToHTML(htmlStr);
    // Appends the html file to main div
    // Note : firstChild of html is done due to needing to grab the body from the stringToHTML function
    main.append(html.firstChild);

    // Gets the current date
    const date = new Date();
    // Formats the current date used send a request for timetable and notices later
    var TodayFormatted =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

    // Replaces actual date with a selected date. Used for testing.
    // TodayFormatted = "2020-08-31";

    // Creates the container div for the timetable portion of the home page
    var TimetableStr = `<div class="timetable-container"><h2>Today's Lessons:</h2><div class="day-container" id="day-container"></div></div>`;
    var Timetable = stringToHTML(TimetableStr);
    // Appends the timetable container into the home container
    document.getElementById("home-container").append(Timetable.firstChild);

    // Creates the shortcut container into the home container
    var ShortcutStr = `<div class="shortcut-container"><h2>Shortcuts:</h2><div class="shortcuts" id="shortcuts"></div></div>`;
    var Shortcut = stringToHTML(ShortcutStr);
    // Appends the shortcut container into the home container
    document.getElementById("home-container").append(Shortcut.firstChild);

    function CheckUnmarkedAttendance(lessonattendance) {
      if (lessonattendance === undefined) {
        var lesson = " ";
      } else {
        var lesson = lessonattendance.label;
      }
      return lesson;
    }

    function MakeLessonDiv(lesson, num) {
      var lessondiv = stringToHTML(
        `<div class="day" id=${lesson.code + num} style="${lesson.colour}"><h2>${lesson.description}</h2><h3>${lesson.staff}</h3><h3>${lesson.room}</h3><h4>${lesson.from} - ${lesson.until}</h4><h5>${lesson.attendance}</h5></div>`
      );
      return lessondiv;
    }

    function createNewShortcut(link, icon, title) {
      // Creates the stucture and element information for each seperate shortcut
      var shortcut = document.createElement("a");
      shortcut.setAttribute("href", link);
      shortcut.setAttribute("target", "_blank");
      var shortcutdiv = document.createElement("div");
      shortcutdiv.classList.add("shortcut");
      var image = document.createElement("div");
      image.setAttribute("style", "background-image: url(" + icon + ");");
      image.classList.add("shortcuticondiv");
      var text = document.createElement("p");
      text.textContent = title;
      shortcutdiv.append(image);
      shortcutdiv.append(text);
      shortcut.append(shortcutdiv);

      document.getElementById("shortcuts").append(shortcut);
    }
    // Adds the shortcuts to the shortcut container
    chrome.storage.local.get(["shortcuts"], function (result) {
      var shortcuts = Object.values(result)[0];
      for (let i = 0; i < shortcuts.length; i++) {
        if (shortcuts[i].enabled) {
          Itemname = (shortcuts[i].name).replace(/ /g, '')
          createNewShortcut(  
            ShortcutLinks[Itemname].link,
            ShortcutLinks[Itemname].icon,
            shortcuts[i].name
          );
        }
      }
    });
    // Creates the notices container into the home container
    var NoticesStr = `<div class="notices-container"><h2>Notices:</h2><div class="notice-container" id="notice-container"></div></div>`;
    var Notices = stringToHTML(NoticesStr);
    // Appends the shortcut container into the home container
    document.getElementById("home-container").append(Notices.firstChild);
    var weblink = window.location.href.split("/")[2];

    // Creates a HTTP Post Request to the SEQTA page for the students timetable
    var xhr = new XMLHttpRequest();
    xhr.open(
      "POST",
      "https://" + weblink + "/seqta/student/load/timetable?",
      true
    );
    // Sets the response type to json
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");

    xhr.onreadystatechange = function () {
      // Once the response is ready
      if (xhr.readyState === 4) {
        var serverResponse = JSON.parse(xhr.response);
        lessonArray = [];
        var DayContainer = document.getElementById("day-container")
        // If items in response:
        if (serverResponse.payload.items.length > 0) {
          if (!DayContainer.innerText){
            // console.log(serverResponse.payload.items.length);
            for (let i = 1; i < serverResponse.payload.items.length; i++) {
              lessonArray.push(serverResponse.payload.items[i]);
            }
            // If items in the response, set each corresponding value into divs

            fetch("https://" + weblink + "/seqta/student/load/prefs?", {
              method: "POST",
              headers: {
                "Content-Type": "application/json; charset=utf-8",
              },
              body: JSON.stringify({"request":"userPrefs","asArray":true,"user":69})
            })
              .then((result) => result.json())
              .then((response) => {
                subjects = response.payload

                for (let i = 0; i < lessonArray.length; i++) {

                  subjectname = `timetable.subject.colour.${lessonArray[i].code}`
                  
                  subject = subjects.find(element => element.name === subjectname)
                  if (!subject){
                    lessonArray[i].colour = `--item-colour: #8e8e8e;`
                  }
                  else {
                  lessonArray[i].colour = `--item-colour: ${subject.value};`
                  }
                  // Removes seconds from the start and end times
                  lessonArray[i].from = lessonArray[i].from.substring(0, 5);
                  lessonArray[i].until = lessonArray[i].until.substring(0, 5);
                  // Checks if attendance is unmarked, and sets the string to " ".
                  lessonArray[i].attendance = CheckUnmarkedAttendance(
                    lessonArray[i].attendance
                  );
                }
                // If on home page, apply each lesson to HTML with information in each div
    
                for (let i = 0; i < lessonArray.length; i++) {
                  console.log(lessonArray[i])
                  var div = MakeLessonDiv(lessonArray[i], i+1);
                  // Append each of the lessons into the day-container
                  DayContainer.append(div.firstChild);
                }
    
                for (i = 0; i < lessonArray.length; i++) {
                  CheckCurrentLesson(lessonArray[i], i+1);
                }
                // For each lesson, check the start and end times
                CheckCurrentLessonAll(lessonArray);

              });


            } 
          }
          else {
            if (!DayContainer.innerText){
              var dummyDay = document.createElement("div");
              dummyDay.classList.add("day");
              DayContainer.append(dummyDay); 
            }

          }
      }
    };
    xhr.send(
      JSON.stringify({
        // Information sent to SEQTA page as a request with the dates and student number
        from: TodayFormatted,
        until: TodayFormatted,
        // Funny number
        student: 69,
      })
    );

    // Sends similar HTTP Post Request for the notices
    var xhr2 = new XMLHttpRequest();
    xhr2.open(
      "POST",
      "https://" + weblink + "/seqta/student/load/notices?",
      true
    );
    xhr2.setRequestHeader("Content-Type", "application/json; charset=utf-8");

    xhr2.onreadystatechange = function () {
      if (xhr2.readyState === 4) {
        var NoticesPayload = JSON.parse(xhr2.response);
        var NoticeContainer = document.getElementById("notice-container");
        if (NoticesPayload.payload.length == 0) {
          if (!NoticeContainer.innerText){
            // If no notices: display no notices
            var dummyNotice = document.createElement("div");
            dummyNotice.textContent = "No notices for today.";
            dummyNotice.classList.add("dummynotice");
            NoticeContainer.append(dummyNotice);
          }

        } else {
          if (!NoticeContainer.innerText){
            // For each element in the response json:
            for (let i = 0; i < NoticesPayload.payload.length; i++) {
              // Create a div, and place information from json response
              var NewNotice = document.createElement("div");
              NewNotice.classList.add("notice");
              var title = stringToHTML(
                `<h3>` + NoticesPayload.payload[i].title + `</h3>`
              );
              NewNotice.append(title.firstChild);

              if (NoticesPayload.payload[i].label_title != undefined) {
                var label = stringToHTML(
                  `<h5>` + NoticesPayload.payload[i].label_title + `</h5>`
                );
                NewNotice.append(label.firstChild);
              }

              var staff = stringToHTML(
                `<h6>` + NoticesPayload.payload[i].staff + `</h6>`
              );
              NewNotice.append(staff.firstChild);
              // Converts the string into HTML
              var content = stringToHTML(NoticesPayload.payload[i].contents);
              for (let i = 0; i < content.childNodes.length; i++) {
                NewNotice.append(content.childNodes[i]);
              }
              // Gets the colour for the top section of each notice
              var colour = NoticesPayload.payload[i].colour;
              var colourbar = document.createElement("div");
              colourbar.classList.add("colourbar");
              colourbar.style.background = colour;
              // Appends the colour bar to the new notice
              NewNotice.append(colourbar);
              // Appends the new notice into the notice container
              NoticeContainer.append(NewNotice);
            }
        }
      }
      }
    };
    // Data sent as the POST request
    xhr2.send(JSON.stringify({ date: TodayFormatted }));

    // Sends similar HTTP Post Request for the notices
    chrome.storage.local.get(null, function (result) {
      if (result.notificationcollector) {
        var xhr3 = new XMLHttpRequest();
        xhr3.open(
          "POST",
          "https://" + weblink + "/seqta/student/heartbeat?",
          true
        );
        xhr3.setRequestHeader(
          "Content-Type",
          "application/json; charset=utf-8"
        );
        xhr3.onreadystatechange = function () {
          if (xhr3.readyState === 4) {
            var Notifications = JSON.parse(xhr3.response);
            var alertdiv = document.getElementsByClassName(
              "notifications__bubble___1EkSQ"
            )[0];
            if (typeof alertdiv == 'undefined'){
              console.log("[BetterSEQTA] No notifications currently")
             
            }
            else {
              alertdiv.textContent = Notifications.payload.notifications.length;
            }
          }
        };
        xhr3.send(
          JSON.stringify({
            timestamp: "1970-01-01 00:00:00.0",
            hash: "#?page=/home",
          })
        );
      }
    });
  }, 8);
}

function EnabledDisabledToBool(input) {
  if (input == "enabled") {
    return true;
  }
  if (input == "disabled") {
    return false;
  }
}

function LoadInit() {
  console.log("[BetterSEQTA] Started Init");
  chrome.storage.local.get(null, function (result) {
    if (result.onoff) {
      SendHomePage();
    }

  });
}
