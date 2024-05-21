import { obterCategorias } from '@/http/index';

export default (await import('vue')).defineComponent({
data() {
return {
categorias: []
};
},
created() {
this.categorias = await obterCategorias();
}
});
