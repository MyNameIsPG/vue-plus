<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TableRenderJsx',
  props: {
    row: Object,
    scope: Object
  },
  render() {
    return (this.row.renderJsx(this.scope.row))
  }
})
</script>

<style scoped>

</style>
