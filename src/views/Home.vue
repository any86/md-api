<template>
    <article class="p-2 d-flex">
        <section class="flex-1">
            <h1>录入</h1>
            <table class="table table--border table--striped mt-1">
                <tr>
                    <th>键值</th>
                    <th>数据类型</th>
                    <th>说明</th>
                    <th>举例</th>
                    <th>操作</th>
                </tr>
                <tr v-for="(row, index) in table" :key="index">
                    <td>
                        <input v-model="row.key" placeholder="请输入键值" />
                    </td>
                    <td>
                        <select v-model="row.type" placeholder="请输入数据类型">
                            <option>String</option>
                            <option>Number</option>
                            <option>Array</option>
                            <option>Object</option>
                        </select>
                    </td>
                    <td>
                        <input v-model="row.desc" placeholder="请输入说明" />
                    </td>
                    <td>
                        <input v-model="row.example" placeholder="请输入举例" />
                    </td>

                    <td>
                        <button
                            v-if="index == table.length - 1"
                            @click="createRow"
                            class="a-button a-button--primary"
                        >继续添加</button>
                    </td>
                </tr>
            </table>
        </section>

        <section class="preview ml-2">
            <h1>预览</h1>
            <div class="preview__content mt-1">
                <button @click="$copy(markdown)" class="mb-2 a-button a-button--success">复制</button>
                <!-- <p align="center" class="text-dark">预览区</p> -->
                <pre>{{markdown}}</pre>
            </div>
        </section>
    </article>
</template>

<script>
export default {
    name: "Home",

    data() {
        return {
            mdHeader: `|键值|数据类型|说明|举例|\r\n|-|-|-|-|`,
            table: [
                {
                    key: "",
                    type: "",
                    desc: "",
                    example: ""
                }
            ]
        };
    },

    computed: {
        markdown() {
            return (
                this.mdHeader +
                this.table.map(
                    row =>
                        `\r\n|${row.key}|\`${row.type}\`|${row.desc}|${row.example}|`
                )
            );
        }
    },

    methods: {
        createRow() {
            this.table.push({
                key: "",
                type: "",
                desc: "",
                example: ""
            });
        }
    }
};
</script>
<style lang="scss" scoped>
input {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: var(--space);
}
.preview {
    width: 360px;
    &__content {
        border: 1px dashed #ddd;
        padding: var(--space);
    }
}
</style>