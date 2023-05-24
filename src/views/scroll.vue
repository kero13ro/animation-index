<script setup></script>

<template>
  <section class="wrap-3d">
    <div class="h-screen"></div>

    <div class="item-3d">
      <span class="ground"></span>
      <figure class="item-content">
        <div class="h-24"></div>
      </figure>
    </div>

    <div class="h-screen"></div>
  </section>
</template>

<style lang="scss" scoped>
  // =========================
  // colors
  // =========================
  $master-grey: #f0f0f0;

  // 3 shades of grey
  $master-l-10: mix(white, $master-grey, 10%);
  $master-d-10: mix(black, $master-grey, 10%);
  $master-d-15: mix(black, $master-grey, 15%);

  // font colors
  $font-base: mix(black, $master-grey, 50%);
  $font-dark: mix(black, $master-grey, 80%);
  $font-spot: #08c;

  // =========================
  // one breakpoint is enough for this demo
  // =========================
  $wide-m: 600px;

  @mixin wide-m {
    @media (max-width: #{$wide-m}) {
      @content;
    }
  }

  $mx-width: 50rem;

  strong {
    font-weight: normal;
    color: $font-dark;
  }

  // =========================
  // this wraps all items
  // =========================
  .wrap-3d {
    width: 100%;
    height: 100%;
    height: 500px;
    max-height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    background-color: $master-grey;
    transform-style: preserve-3d;
    perspective: 150rem;
    perspective-origin: 50% 110%;
  }

  // =========================
  // this wraps one single item
  // =========================
  .item-3d {
    width: 100%;
    margin-bottom: 20%;
    padding-top: 10%;
    padding-bottom: 5%;
    transform-origin: 50% 100%;
    transform-style: preserve-3d;
    //box-shadow: inset 0 0 0 1px red;

    @include wide-m {
      margin-bottom: 40%;
    }
  }

  // =========================
  // this fakes the 3d surface
  // has to be wider than it's parent
  // =========================
  .ground {
    position: absolute;
    top: 0;
    right: -50%;
    bottom: 0;
    left: -50%;
    width: 200%;
    margin: 0 auto;
    background-image: linear-gradient($master-d-10, $master-l-10 60%);
    background-size: 100%;
    transform-origin: 50% 100%;
    transform: rotateX(70deg);
    transform-style: preserve-3d;
    backface-visibility: hidden;
    //box-shadow: inset 0 0 0 10px black;

    &:before,
    &:after {
      content: '';
      position: absolute;
      width: 100%;
    }

    // this contains a radial-gradient, which fakes the watch's dropshadow
    &:before {
      top: 0;
      left: 50%;
      height: 100%;
      width: 50%;
      max-width: $mx-width;
      background-image: radial-gradient(
        $master-d-15,
        rgba($master-d-15, 0) 60%
      );
      background-size: 50% 80%;
      background-repeat: no-repeat;
      transform: translateX(-50%);
      //box-shadow: inset 0 0 0 5px purple;
    }

    // the front-side
    &:after {
      bottom: -500px;
      left: 0;
      height: 500px;
      background-image: linear-gradient($master-d-10, $master-l-10);
      transform-origin: 50% 0;
      transform: rotateX(-70deg);
      //box-shadow: inset 0 0 0 5px blue;
    }
  }

  // =========================
  // a figure element that wraps
  // the image and the caption
  // =========================
  .item-content {
    position: relative;
    width: 100%;
    max-width: $mx-width;
    margin: 0 auto;
    display: flex;
    align-items: center;
    transform: translateZ(0); // fixes the layers in Safari
    //box-shadow: inset 0 0 0 1px green;
  }
</style>
