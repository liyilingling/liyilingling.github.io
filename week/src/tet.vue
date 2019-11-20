<template>
    <div>
        <div style="margin-bottom:70px;background-color: rgba(249,249,249,0.2);text-align: center">
            <div style="margin-bottom:20px;line-height:3.5em;word-wrap: break-word; word-break: break-all; color: rgb(232, 76, 61);"><span style="word-wrap: break-word; word-break: break-all; font-size: 30px;">{{stop}}</span></div>
             <div><span style="line-height:2.5em;word-wrap: break-word; word-break: break-all; color: rgb(105, 105, 105);">{{sbottom}}</span></div>
        </div>
    </div>
</template>
<script>
    export default {
        props:['stop','sbottom'],
		data(){
            return{

            }
		},
	}
</script>
<style>

</style>