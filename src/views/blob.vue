<script setup lang="ts">
  import anime from 'animejs'
  import { onMounted } from 'vue'
  // @@toto
  // import KUTE from 'kute.js';

  // 官網範例
  const v2 = () => {
    anime({
      targets: '.morphing',
      d: [
        {
          value:
            'M171.5,-191.9C215.3,-167.6,239.1,-107,234.1,-53.5C229,0.1,195,46.5,157.5,71.5C119.9,96.5,78.8,99.9,37.7,123.4C-3.3,146.9,-44.2,190.4,-72.4,185.9C-100.7,181.3,-116.1,128.7,-133.1,84.2C-150.1,39.7,-168.6,3.3,-177.6,-46.2C-186.7,-95.8,-186.2,-158.6,-155,-185.1C-123.8,-211.6,-61.9,-201.8,1,-202.9C63.9,-204.1,127.7,-216.2,171.5,-191.9Z',
        },
        {
          value:
            'M95,-109.2C143.2,-72.7,216.4,-61.9,232.3,-32C248.2,-2.2,206.8,46.6,170.7,88.7C134.7,130.7,103.9,165.9,67.2,175C30.6,184.2,-12.1,167.3,-52.4,150C-92.8,132.7,-130.8,115.1,-141.6,86.6C-152.3,58,-135.7,18.5,-134,-29.3C-132.4,-77.1,-145.6,-133.1,-125.7,-174.6C-105.8,-216.1,-52.9,-243.1,-14.8,-225.5C23.4,-207.8,46.7,-145.7,95,-109.2Z',
        },
      ],
      easing: 'easeInOutSine',
      duration: 10000,
      direction: 'infinite alternate',
      loop: true,
    })
  }

  // 線上生成 SVG 後，替換路徑
  const v3 = () => {
    anime({
      targets: '#visual1',
      d: [
        {
          value:
            'M120.7 -101.9C170.7 -70.7 235.4 -35.4 247.5 12.1C259.6 59.6 219.3 119.3 169.3 150.4C119.3 181.6 59.6 184.3 8 176.3C-43.6 168.3 -87.2 149.5 -114.7 118.4C-142.2 87.2 -153.6 43.6 -158.6 -4.9C-163.5 -53.5 -162 -107 -134.5 -138.2C-107 -169.3 -53.5 -178.2 -9.1 -169.1C35.4 -160 70.7 -133 120.7 -101.9',
        },
        {
          // 原始圖片路徑
          value:
            'M179.8 -185.4C218.1 -141.4 224 -70.7 212.1 -11.9C200.2 46.9 170.5 93.8 132.1 132.6C93.8 171.5 46.9 202.2 -11.4 213.7C-69.8 225.1 -139.5 217.2 -173.4 178.4C-207.2 139.5 -205.1 69.8 -187.9 17.2C-170.7 -35.4 -138.4 -70.7 -104.5 -114.7C-70.7 -158.7 -35.4 -211.4 17.7 -229C70.7 -246.7 141.4 -229.4 179.8 -185.4',
        },
      ],
      easing: 'easeInOutSine',
      duration: 6000,
      direction: 'infinite alternate',
      loop: true,
    })
  }

  // const v4 = () => {
  //   KUTE.to('#v4_1', { path: '#v4_2' }, { repeat: 999, duration: 3000, yoyo: true }).start();
  // };

  onMounted(() => {
    v2()
    v3()
    // v4();
  })
</script>

<template>
  <div class="container">
    <!-- <div class="text-lg">KUTE.js animate</div>
    <svg
      viewBox="0 0 900 600"
      width="900"
      height="600"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
    >
      <g transform="translate(441.2262011444091 308.6843066798547)">
        <path
          id="v4_1"
          d="M179.8 -185.4C218.1 -141.4 224 -70.7 212.1 -11.9C200.2 46.9 170.5 93.8 132.1 132.6C93.8 171.5 46.9 202.2 -11.4 213.7C-69.8 225.1 -139.5 217.2 -173.4 178.4C-207.2 139.5 -205.1 69.8 -187.9 17.2C-170.7 -35.4 -138.4 -70.7 -104.5 -114.7C-70.7 -158.7 -35.4 -211.4 17.7 -229C70.7 -246.7 141.4 -229.4 179.8 -185.4"
          fill="#BB004B"
        ></path>
        <path
          id="v4_2"
          d="M120.7 -101.9C170.7 -70.7 235.4 -35.4 247.5 12.1C259.6 59.6 219.3 119.3 169.3 150.4C119.3 181.6 59.6 184.3 8 176.3C-43.6 168.3 -87.2 149.5 -114.7 118.4C-142.2 87.2 -153.6 43.6 -158.6 -4.9C-163.5 -53.5 -162 -107 -134.5 -138.2C-107 -169.3 -53.5 -178.2 -9.1 -169.1C35.4 -160 70.7 -133 120.7 -101.9"
          fill="#BB004B"
          style="visibility: hidden"
        ></path>
      </g>
    </svg> -->

    <div class="text-lg">v3 anime.js</div>
    <svg
      viewBox="0 0 900 600"
      width="900"
      height="600"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
    >
      <g transform="translate(405.55856810841806 296.17749615278365)">
        <path
          id="visual1"
          d="M179.8 -185.4C218.1 -141.4 224 -70.7 212.1 -11.9C200.2 46.9 170.5 93.8 132.1 132.6C93.8 171.5 46.9 202.2 -11.4 213.7C-69.8 225.1 -139.5 217.2 -173.4 178.4C-207.2 139.5 -205.1 69.8 -187.9 17.2C-170.7 -35.4 -138.4 -70.7 -104.5 -114.7C-70.7 -158.7 -35.4 -211.4 17.7 -229C70.7 -246.7 141.4 -229.4 179.8 -185.4"
          fill="#BB004B"
        ></path>
      </g>
    </svg>

    <div class="text-lg">svg animate</div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="0">
      <clipPath id="blob">
        <!-- transform 可設定 view 範圍 -->
        <path transform="translate(100,-50)">
          <animate
            attributeName="d"
            dur="10000ms"
            repeatCount="indefinite"
            values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"
          ></animate>
        </path>
      </clipPath>
    </svg>

    <img
      src="https://schweppes.wpenginepowered.com/wp-content/uploads/2021/06/Header-1-800x450.jpg"
      alt=""
      style="clip-path: url(#blob)"
    />

    <div class="text-lg">anime.js svg</div>

    <svg width="0" height="0" viewBox="0 0 600 600">
      <clipPath id="shape">
        <path
          id="morphing"
          class="morphing"
          transform="translate(300,250)"
          d="M95,-109.2C143.2,-72.7,216.4,-61.9,232.3,-32C248.2,-2.2,206.8,46.6,170.7,88.7C134.7,130.7,103.9,165.9,67.2,175C30.6,184.2,-12.1,167.3,-52.4,150C-92.8,132.7,-130.8,115.1,-141.6,86.6C-152.3,58,-135.7,18.5,-134,-29.3C-132.4,-77.1,-145.6,-133.1,-125.7,-174.6C-105.8,-216.1,-52.9,-243.1,-14.8,-225.5C23.4,-207.8,46.7,-145.7,95,-109.2Z"
          fill="url(#grad1)"
        />
      </clipPath>
    </svg>

    <img
      src="https://schweppes.wpenginepowered.com/wp-content/uploads/2021/06/Header-1-800x450.jpg"
      style="clip-path: url(#shape)"
    />

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="600"
      height="600"
      viewBox="0 0 600 600"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color: #039eb3; stop-opacity: 1" />
          <stop offset="100%" style="stop-color: #ffae00; stop-opacity: 1" />
        </linearGradient>
      </defs>
      <g transform="translate(300,300)">
        <path
          id="morphing"
          class="morphing"
          d="M95,-109.2C143.2,-72.7,216.4,-61.9,232.3,-32C248.2,-2.2,206.8,46.6,170.7,88.7C134.7,130.7,103.9,165.9,67.2,175C30.6,184.2,-12.1,167.3,-52.4,150C-92.8,132.7,-130.8,115.1,-141.6,86.6C-152.3,58,-135.7,18.5,-134,-29.3C-132.4,-77.1,-145.6,-133.1,-125.7,-174.6C-105.8,-216.1,-52.9,-243.1,-14.8,-225.5C23.4,-207.8,46.7,-145.7,95,-109.2Z"
          fill="url(#grad1)"
        />
      </g>
    </svg>
  </div>
</template>

<style lang="scss" scoped></style>
