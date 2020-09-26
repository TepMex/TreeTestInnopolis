<template>
        <div class="validate-component">
            <span @click="validate">{{ Array(depth).fill().map(()=>'>').join('') }} {{value}}</span><br/>
            <ValidateComponent 
                    ref="childComponents"
                    v-for="(child, idx) in children" 
                    :key="idx"
                    :value="child.value"
                    :children="child.childs"
                    :depth="depth + 1"
                />
        </div>
</template>

<script>
export default {
    name: 'ValidateComponent',

    props: {
        value: {
            type: String,
            required: true,
        },
        children: {
            type: Array,
        },
        depth: {
            type: Number,
            default: 0
        }
    },

    methods: {
        validate() {
            console.log('validate', this.value);
            if(this.children.length > 0) {
                this.$refs.childComponents.forEach((child) => child.validate());
            }
        }
    },
}
</script>

<style scoped>
span {
    cursor: pointer;
}
</style>