<template>
  <div class="view-detail">
    <scroll-view
      scroll-y
      style="height: 770rpx;"
      @scrolltoupper="upper"
      @scrolltolower="lower"
      @scroll="onScroll"
    >
      <div
        v-if="!list.length"
        class="data-none text-center"
      >
        暂无数据...
      </div>
      <div
        v-for="(dayList, index) in list"
        :key="index"
      >
        <div
          class="scroll-view-item"
          v-for="(item, dayIndex) in dayList"
          :key="item.date + dayIndex"
        >
          <div
            class="item-head weui-flex"
            v-if="dayIndex === 0"
          >
            <div class="weui-flex__item">
              {{item.createdAt}}
            </div>
            <div class="weui-flex__item text-right">
              <!-- 支出:{{getLen(dayList)}} -->
              <amount :billList="dayList"></amount>
            </div>
          </div>
          <div class="item-content">
            <div class="content">{{item.remark || item.type}}</div>
            <div class="content text-right">{{item.amount}}</div>
          </div>
        </div>
      </div>

    </scroll-view>
    <div class="footer-bottom">
      <a href="/pages/addConsumeBill/main">
        <button>记一笔</button>
      </a>
    </div>
  </div>
</template>

<script>
// 账单列表
import store from './store'
import day from 'dayjs'
import amount from './amount'

const mapList = function (arr = []) {
  let newArr = []
  const copyArr = arr.slice()

  while (copyArr.length) {
    const next = copyArr.shift()
    let index = -1
    const alreadyExists = newArr.some((child = [], i) => {
      const hasFind = child.some((bill) => bill.createdAt === next.createdAt)
      if (hasFind) {
        index = i
      }
      return hasFind
    })

    if (alreadyExists && index !== -1) {
      newArr[index].push(next)
    } else {
      newArr.push([next])
    }
  }
  return newArr
}

export default {
  computed: {
    list () {
      const list = store.state.list.map(({createdAt, ...res}) => ({
        ...res,
        createdAt: day(Number(createdAt)).format('YYYY-MM-DD')
      }))

      return mapList(list)
    }
  },
  components: {
    amount
  },
  methods: {
    onScroll (e) {
      // console.log(this)
    }

  }
}
</script>

<style lang="scss" scoped>
.view-detail {
  position: relative;
  height: 100%;
  .footer-bottom {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
.data-none {
  padding-top: 100px;
}
.scroll-view-item {
  // height: 36px;
  padding: 10px;
  border-bottom: 1px solid rgb(215, 215, 215);
}
.item-content {
  display: flex;
  .content {
    flex: 1;
    &:first-child {
      width: 80%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
.item-head {
  padding-right: 2px;
  font-size: 16px;
  color: rgb(155, 152, 152);
}
</style>
