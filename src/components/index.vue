<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <!--<h1 v-for="(item,index) in tabeldate">-->
    <!--<li>{{item.assign}}</li></h1>-->
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>导航一</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>导航二</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>导航三</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="3-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="3-4">
            <template slot="title">选项4</template>
            <el-menu-item index="3-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span >王小虎</span>
      </el-header>
      <el-main>
        <el-table ref="multipleTable" tooltip-effect="dark" :data="getservers" height="250" border style="width: 100%"
                  @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="180"></el-table-column>
           <!--<template slot-scope="scope">{{ scope.row.date }}</template>-->
          <el-table-column prop="asset" label="所属" width="180"></el-table-column>
          <el-table-column prop="created_by" label="创建方式" width="180"></el-table-column>
          <el-table-column prop="hosted_on" label="挂载" width="180"></el-table-column>
          <el-table-column prop="id" label="id" width="180"></el-table-column>
          <el-table-column prop="model" label="服务器型号"></el-table-column>
          <el-table-column prop="os_distribution" label="操作系统"></el-table-column>
          <el-table-column prop="os_release" label="系统版本"></el-table-column>
          <el-table-column prop="os_type" label="系统类型"></el-table-column>
          <el-table-column prop="raid_type" label="Raid"></el-table-column>
          <el-table-column prop="sub_asset_type" label="服务类型"></el-table-column>
        </el-table>
        <div style="margin-top: 20px">
          <el-button @click="toggleSelection([tableData3[1], tableData3[2]])">切换第二、第三行的选中状态</el-button>
          <el-button @click="toggleSelection()">取消选择</el-button>
        </div>
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: "index",
    data() {
      return {
        // show: this.$store.state.serverinfo
        // show:this.get_date()
        // tableData: [],
         multipleSelection: []
      }
    },
    methods: {
      //相当于一个函数 函数名称叫做getserver如果有参数可以加
      ...mapActions(['getserver',]),
      // test222() {
      //   console.log(this.tableData)
      // },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    },
    computed: {
      ... mapGetters(['getservers']),
      // 上面这等同于下面的get_date
      get_date() {
        return this.$store.state.serverinfo
      }
    }
    ,
    mounted() {
      this.getserver();
    }
  }
</script>

<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
