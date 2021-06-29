<!-- Button -->
<template>
  <button
    class="qr-button"
    @click="handleClick"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'qr-button--' + type : '',
      buttonSize ? 'qr-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
      }
    ]"
  >
    <i class="qr-icon-loading" v-if="loading"></i>
    <i class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
 name: 'QRButton',

 inject: {
   qrForm: {
     default:''
   },
   qrFormItem: {
     default: ''
   }
 },

 props: {
   type: {
     type: String,
     default: 'default'
   },
   size: String,
   icon: {
     type: String,
     default: ''
   },
   nativeType: {
     type: String,
     default: 'button'
   },
   loading: Boolean,
   disabled: Boolean,
   plain: Boolean,
   autofocus: Boolean,
   round: Boolean,
   circle: Boolean
 },

 computed: {
   _qrFormItemSize() {
     return (this.qrFormItem || {})._qrFormItemSize;
   },
   buttonSize() {
     return this.size || this._qrFormItemSize || (this.$ELEMENT || {}).size;
   },
   buttonDisabled() {
     return this.disabled || (this.qrFormItem || {}).disabled; 
   }
 },

 methods: {
   handleClick(e) {
     this.$emit('click', e);
   }
 },
}
</script>