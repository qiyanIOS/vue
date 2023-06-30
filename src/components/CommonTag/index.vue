<template>
  <div class="tag-group">
    <el-tag
      v-for="(item, index) in tags"
      :key="item.path"
      :effect="$route.name === item.name ? 'dark' : 'plain'"
      :closable="item.name !== 'home'"
      @click="clickMenu(item)"
      @close="handerClose(item, index)"
      size="small"
    >
      {{ item.label }}
    </el-tag>
  </div>
</template>

<script>
import tab from "@/store/tab";
import { mapState, mapMutations } from "vuex";
export default {
  name: "CommonTag",

  computed: {
    ...mapState({
      tags: (state) => state.tab.menuList,
    }),
  },
  methods: {
    clickMenu(item) {
      this.$router.push({
        name: item.name,
      });
    },
    ...mapMutations(["removeTag"]),
    //删除tag方法
    handerClose(item, index) {
      this.removeTag(item);

      const lenght = this.tags.length;
      console.log("dddf", item.name, this.$route.name);

      if (item.name !== this.$route.name) {
        return;
      }

      if (index === lenght) {
        console.log(this.tags, index);
        this.$router.push({
          name: this.tags[index - 1].name,
        });
      } else {
        console.log("eeeee");
        this.$router.push({
          name: this.tags[index].name,
        });
      }
    },
  },
};
</script>
<style lang="less" scoped>
.tag-group {
  padding: 20px 20px 0px 10px;
  .el-tag {
    margin-left: 15px;
  }
}
</style>
