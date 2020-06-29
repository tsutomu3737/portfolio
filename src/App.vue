<template>
  <div>
    <!-- Headerコンポーネントの読み込み -->
    <Header></Header>
    <!-- 各画面コンポーネントの読み込み -->
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './views/Header'

export default {
  components : {
    Header
  }
}
</script>