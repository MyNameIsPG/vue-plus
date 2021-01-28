<script>
import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'TableRender',
  props: {
    row: Object,
    scope: Object
  },
  render() {
    return h(this.row.render(h, this.scope.row))
  }
})
</script>

<style scoped>

</style>
