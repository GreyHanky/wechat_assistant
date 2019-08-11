<template>
  <div>
    支出:{{amount}}
  </div>
</template>

<script>
export default {
  props: {
    billList: Array
  },
  computed: {
    amount () {
      return this.billList.reduce((sum, {amount}) => sum + amount, 0)
    }
  }
}
</script>
