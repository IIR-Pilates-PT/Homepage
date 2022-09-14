<template>
    <div class="branch">
      <h1>This is an Branch page</h1>
      <router-view></router-view>
    </div>
  </template>
  
  <style>
  @media (min-width: 1024px) {
    .branch {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
  