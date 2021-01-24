<script>
import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'Tables',
  props: {
    row: Object
  },
  render() {
    return h(this.row.render(h, this.row))
  }
})
</script>

<style scoped>

</style>
