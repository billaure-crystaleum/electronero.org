const axios = require('axios');
const express = require('express');
const app = express();
const router = express.Router();
const port = 1990;
const port2 = 1991;

var man = { "frames": {
    "man 1.png":
    {
  "frame": {"x":0,"y":0,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 2.png":
{
  "frame": {"x":318,"y":0,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 3.png":
{
  "frame": {"x":636,"y":0,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 4.png":
{
  "frame": {"x":954,"y":0,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 5.png":
{
  "frame": {"x":1272,"y":0,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 6.png":
{
  "frame": {"x":1590,"y":0,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 7.png":
{
  "frame": {"x":1908,"y":0,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 8.png":
{
  "frame": {"x":2226,"y":0,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 9.png":
{
  "frame": {"x":2544,"y":0,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 10.png":
{
  "frame": {"x":2862,"y":0,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 11.png":
{
  "frame": {"x":3180,"y":0,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 12.png":
{
  "frame": {"x":3498,"y":0,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 13.png":
{
  "frame": {"x":3816,"y":0,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 14.png":
{
  "frame": {"x":0,"y":411,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 15.png":
{
  "frame": {"x":318,"y":411,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 16.png":
{
  "frame": {"x":636,"y":411,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 17.png":
{
  "frame": {"x":954,"y":411,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 18.png":
{
  "frame": {"x":1272,"y":411,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 19.png":
{
  "frame": {"x":1590,"y":411,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 20.png":
{
  "frame": {"x":1908,"y":411,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 21.png":
{
  "frame": {"x":2226,"y":411,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 22.png":
{
  "frame": {"x":2544,"y":411,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 23.png":
{
  "frame": {"x":2862,"y":411,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 24.png":
{
  "frame": {"x":3180,"y":411,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 25.png":
{
  "frame": {"x":3498,"y":411,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 26.png":
{
  "frame": {"x":3816,"y":411,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 27.png":
{
  "frame": {"x":0,"y":822,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 28.png":
{
  "frame": {"x":318,"y":822,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 29.png":
{
  "frame": {"x":636,"y":822,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 30.png":
{
  "frame": {"x":954,"y":822,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 31.png":
{
  "frame": {"x":1272,"y":822,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 32.png":
{
  "frame": {"x":1590,"y":822,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 33.png":
{
  "frame": {"x":1908,"y":822,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 34.png":
{
  "frame": {"x":2226,"y":822,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 35.png":
{
  "frame": {"x":2544,"y":822,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 36.png":
{
  "frame": {"x":2862,"y":822,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 37.png":
{
  "frame": {"x":3180,"y":822,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 38.png":
{
  "frame": {"x":3498,"y":822,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 39.png":
{
  "frame": {"x":3816,"y":822,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 40.png":
{
  "frame": {"x":0,"y":1233,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 41.png":
{
  "frame": {"x":318,"y":1233,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 42.png":
{
  "frame": {"x":636,"y":1233,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 43.png":
{
  "frame": {"x":954,"y":1233,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 44.png":
{
  "frame": {"x":1272,"y":1233,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 45.png":
{
  "frame": {"x":1590,"y":1233,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 46.png":
{
  "frame": {"x":1908,"y":1233,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 47.png":
{
  "frame": {"x":2226,"y":1233,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 48.png":
{
  "frame": {"x":2544,"y":1233,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 49.png":
{
  "frame": {"x":2862,"y":1233,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 50.png":
{
  "frame": {"x":3180,"y":1233,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 51.png":
{
  "frame": {"x":3498,"y":1233,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 52.png":
{
  "frame": {"x":3816,"y":1233,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 53.png":
{
  "frame": {"x":0,"y":1644,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 54.png":
{
  "frame": {"x":318,"y":1644,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 55.png":
{
  "frame": {"x":636,"y":1644,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 56.png":
{
  "frame": {"x":954,"y":1644,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 57.png":
{
  "frame": {"x":1272,"y":1644,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 58.png":
{
  "frame": {"x":1590,"y":1644,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 59.png":
{
  "frame": {"x":1908,"y":1644,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 60.png":
{
  "frame": {"x":2226,"y":1644,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 61.png":
{
  "frame": {"x":2544,"y":1644,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 62.png":
{
  "frame": {"x":2862,"y":1644,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 63.png":
{
  "frame": {"x":3180,"y":1644,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 64.png":
{
  "frame": {"x":3498,"y":1644,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 65.png":
{
  "frame": {"x":3816,"y":1644,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 66.png":
{
  "frame": {"x":0,"y":2055,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 67.png":
{
  "frame": {"x":318,"y":2055,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 68.png":
{
  "frame": {"x":636,"y":2055,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 69.png":
{
  "frame": {"x":954,"y":2055,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 70.png":
{
  "frame": {"x":1272,"y":2055,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 71.png":
{
  "frame": {"x":1590,"y":2055,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 72.png":
{
  "frame": {"x":1908,"y":2055,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 73.png":
{
  "frame": {"x":2226,"y":2055,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 74.png":
{
  "frame": {"x":2544,"y":2055,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 75.png":
{
  "frame": {"x":2862,"y":2055,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 76.png":
{
  "frame": {"x":3180,"y":2055,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 77.png":
{
  "frame": {"x":3498,"y":2055,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 78.png":
{
  "frame": {"x":3816,"y":2055,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 79.png":
{
  "frame": {"x":0,"y":2466,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 80.png":
{
  "frame": {"x":318,"y":2466,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 81.png":
{
  "frame": {"x":636,"y":2466,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 82.png":
{
  "frame": {"x":954,"y":2466,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 83.png":
{
  "frame": {"x":1272,"y":2466,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 84.png":
{
  "frame": {"x":1590,"y":2466,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 85.png":
{
  "frame": {"x":1908,"y":2466,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 86.png":
{
  "frame": {"x":2226,"y":2466,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 87.png":
{
  "frame": {"x":2544,"y":2466,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 88.png":
{
  "frame": {"x":2862,"y":2466,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 89.png":
{
  "frame": {"x":3180,"y":2466,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 90.png":
{
  "frame": {"x":3498,"y":2466,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 91.png":
{
  "frame": {"x":3816,"y":2466,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 92.png":
{
  "frame": {"x":0,"y":2877,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 93.png":
{
  "frame": {"x":318,"y":2877,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 94.png":
{
  "frame": {"x":636,"y":2877,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 95.png":
{
  "frame": {"x":954,"y":2877,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 96.png":
{
  "frame": {"x":1272,"y":2877,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 97.png":
{
  "frame": {"x":1590,"y":2877,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 98.png":
{
  "frame": {"x":1908,"y":2877,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 99.png":
{
  "frame": {"x":2226,"y":2877,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 100.png":
{
  "frame": {"x":2544,"y":2877,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 101.png":
{
  "frame": {"x":2862,"y":2877,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 102.png":
{
  "frame": {"x":3180,"y":2877,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 103.png":
{
  "frame": {"x":3498,"y":2877,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 104.png":
{
  "frame": {"x":3816,"y":2877,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 105.png":
{
  "frame": {"x":0,"y":3288,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 106.png":
{
  "frame": {"x":318,"y":3288,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 107.png":
{
  "frame": {"x":636,"y":3288,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 108.png":
{
  "frame": {"x":954,"y":3288,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 109.png":
{
  "frame": {"x":1272,"y":3288,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 110.png":
{
  "frame": {"x":1590,"y":3288,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 111.png":
{
  "frame": {"x":1908,"y":3288,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 112.png":
{
  "frame": {"x":2226,"y":3288,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 113.png":
{
  "frame": {"x":2544,"y":3288,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 114.png":
{
  "frame": {"x":2862,"y":3288,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 115.png":
{
  "frame": {"x":3180,"y":3288,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 116.png":
{
  "frame": {"x":3498,"y":3288,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 117.png":
{
  "frame": {"x":3816,"y":3288,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 118.png":
{
  "frame": {"x":0,"y":3699,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 119.png":
{
  "frame": {"x":318,"y":3699,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 120.png":
{
  "frame": {"x":636,"y":3699,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 121.png":
{
  "frame": {"x":954,"y":3699,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 122.png":
{
  "frame": {"x":1272,"y":3699,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 123.png":
{
  "frame": {"x":1590,"y":3699,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 124.png":
{
  "frame": {"x":1908,"y":3699,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 125.png":
{
  "frame": {"x":2226,"y":3699,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 126.png":
{
  "frame": {"x":2544,"y":3699,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 127.png":
{
  "frame": {"x":2862,"y":3699,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 128.png":
{
  "frame": {"x":3180,"y":3699,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 129.png":
{
  "frame": {"x":3498,"y":3699,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 130.png":
{
  "frame": {"x":3816,"y":3699,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 131.png":
{
  "frame": {"x":0,"y":4110,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 132.png":
{
  "frame": {"x":318,"y":4110,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 133.png":
{
  "frame": {"x":636,"y":4110,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 134.png":
{
  "frame": {"x":954,"y":4110,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 135.png":
{
  "frame": {"x":1272,"y":4110,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 136.png":
{
  "frame": {"x":1590,"y":4110,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 137.png":
{
  "frame": {"x":1908,"y":4110,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 138.png":
{
  "frame": {"x":2226,"y":4110,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 139.png":
{
  "frame": {"x":2544,"y":4110,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 140.png":
{
  "frame": {"x":2862,"y":4110,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 141.png":
{
  "frame": {"x":3180,"y":4110,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 142.png":
{
  "frame": {"x":3498,"y":4110,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 143.png":
{
  "frame": {"x":3816,"y":4110,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 144.png":
{
  "frame": {"x":0,"y":4521,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 145.png":
{
  "frame": {"x":318,"y":4521,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 146.png":
{
  "frame": {"x":636,"y":4521,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 147.png":
{
  "frame": {"x":954,"y":4521,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 148.png":
{
  "frame": {"x":1272,"y":4521,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 149.png":
{
  "frame": {"x":1590,"y":4521,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 150.png":
{
  "frame": {"x":1908,"y":4521,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 151.png":
{
  "frame": {"x":2226,"y":4521,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 152.png":
{
  "frame": {"x":2544,"y":4521,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 153.png":
{
  "frame": {"x":2862,"y":4521,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 154.png":
{
  "frame": {"x":3180,"y":4521,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 155.png":
{
  "frame": {"x":3498,"y":4521,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 156.png":
{
  "frame": {"x":3816,"y":4521,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 157.png":
{
  "frame": {"x":0,"y":4932,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 158.png":
{
  "frame": {"x":318,"y":4932,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 159.png":
{
  "frame": {"x":636,"y":4932,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
},
"man 160.png":
{
  "frame": {"x":954,"y":4932,"w":318,"h":411},
  "rotated": false,
  "trimmed": false,
  "spriteSourceSize": {"x":0,"y":0,"w":318,"h":411},
  "sourceSize": {"w":318,"h":411}
}},
"meta": {
  "app": "http://www.texturepacker.com",
  "version": "1.0",
  "image": "https://electronero.org/assets/images/man.png",
  "format": "RGB565",
  "size": {"w":4134,"h":5343},
  "scale": "1",
  "smartupdate": "$TexturePacker:SmartUpdate:17e4a2d92ff3e27832c3f4938cec7c85$"
}};


const circularJSON = require('circular-json');
// get another API, then serve it's response. cool stuff
router.get('/api', (req,res) => {
  //const array = [{ id: 'asdf'}, { id: 'foo' }, { id: 'bar' }]; // changed the input array a bit so that the `array[i].id` would actually work - obviously the asker's true array is more than some contrived strings
  let data_got = [];
  let promises = [];
  let json = {};
  let serveCryptocurrency = function(json){
    res.json(json);
  }
  // for (i = 0; i < array.length; i++) {}
  let getCryptocurrency = function(json){
    axios.get('https://electronero.org/json/man.json').then((response) => {
        try {
          data_got.push(response.data);
          let resp = response.data;
          var serialized = circularJSON.stringify(resp);
          var unserialized = circularJSON.parse(serialized);
          json = unserialized;
          serveCryptocurrency(json)
          console.log(unserialized);
      } catch(e) {
          json = response.data;
          console.log(e);
      }
      }).catch((error) => {
        console.log(error);
      });
  };
  promises.push(getCryptocurrency(json));    
  Promise.all(promises).then(() => console.log(json))
      console.log('after service calls');
});

// get another API, then serve it's response. cool stuff
// oracle -> tracker -> :from-:to 
// 09/07/2021 the day electronero deployed an oracle... 
router.get('/oracle/:tracker/:from-:to', (req, res, next) => {
  let data_we_actually_got = [];
  let for_data_we_want = [];
  let json_obj = {};
  let coin_profile;
  var request_mini_app = req.coin_config;
  console.log("request_mini_app: ");
  console.log("\n");
  console.log(request_mini_app);
  console.log("req.params: ");
  console.log("\n");
  console.log(req.params);

  let serveCryptocurrency = function(coin_profile, coin_data){
    res.json(coin_profile);
  }

  // for (i = 0; i < array.length; i++) {}
  let getCryptocurrency = function(coin_profile){ 
    // ['BTC','LTC']; 
    let swap_to = coin_profile.swap_to;
    var vs_currencies = swap_to.toString().toLowerCase().replace(',', "%2");
    let api_to_call ='https://api.coingecko.com/api/v3/simple/price?ids=crystaleum&vs_currencies=btc%2Cusd%2Ceth%2Cltc';
    axios.get(api_to_call).then((response) => {
        try {
          let resp = response.data;
          var r_serialized = circularJSON.stringify(resp);
          var r_unserialized = circularJSON.parse(r_serialized);
          coin_data = r_unserialized;
          data_we_actually_got.push(json_obj);
          serveCryptocurrency(coin_profile, coin_data)
          console.log(r_unserialized);
      } catch(e) {
        json_obj = response.data;
          console.log(e);
      }
      }).catch((error) => {
        console.log(error);
      });
  };

  let cryptocurrencyData = function(json_obj){
    const base_pairs = ['BTC','LTC','ETH','XSC','ETNX']; 
    let requested_base_pairs = [ ];
    let requested_pairs = [ ];
    let requested_currency = [ ];
    const req_params_from = req.params.from.toString().toUpperCase();
    const req_params_to = req.params.to.toUpperCase().split(",");

    var currency = 'electronero';
    console.log("currency:"+currency);
    let swap_to = req.params.to.toLowerCase().split(",");
    var vs_currencies = swap_to.replace(',', "%2");
    console.log("vs_currencies:"+vs_currencies);
    let api_to_call ='https://api.coingecko.com/api/v3/simple/price?ids='+currency+'&vs_currencies='+vs_currencies;
    console.log(api_to_call);

    requested_base_pairs = req_params_to;
    console.log("BASE: ")
    console.log(requested_base_pairs);
    var currency_arr = req_params_from;
    let tracker = req.params.tracker;
    // symbol === currency name from Coingecko later?
    let symbol = req_params_from;  
    requested_currency.push(currency_arr);
      for (j=0;j<requested_base_pairs.length;j++){
        let from_to = req_params_from+"-"+requested_base_pairs[j];
        requested_pairs.push(from_to);
      }
      coin_profile = {
        name: '',
        symbol: symbol ? symbol : '',
        pairs: requested_pairs,
        base: req_params_from ? req_params_from : '',
        from: req_params_from ? req_params_from : '',
        to: req_params_to ? req_params_to : '',
        swap_from: req.params.from.toString().toUpperCase(),
        swap_to: req.params.to.toString().toUpperCase(),
        price: 0,
        btc_price: 0,
        eth_price: 0,
        usdt_price: 0,
        ltc_price: 0,
        tracker: tracker ? tracker : '',
        oracle: tracker ? tracker : '',
      };
      console.log(coin_profile);
      getCryptocurrency(coin_profile);
    }
    
  for_data_we_want.push(cryptocurrencyData(json_obj));    
  Promise.all(for_data_we_want).then(() => console.log(json_obj))
      console.log('after service calls');
});

/* GET home data. */
router.get('/', function(req, res, next) {
  res.json(man);
});
/* GET man data. */
router.get('/man.json', function(req, res, next) {
  res.json(man);
});
/* GET market data. */
router.get('/market.json', function(req, res, next) {
  res.json(market_data);
});

module.exports = router;