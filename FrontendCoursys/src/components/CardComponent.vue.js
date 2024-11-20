/// <reference types="../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonImg } from '@ionic/vue';
export default (await import('vue')).defineComponent({
    name: 'CardComponent',
    components: {
        IonCol,
        IonCard,
        IonCardHeader,
        IonCardTitle,
        IonCardContent,
        IonButton,
        IonImg
    },
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        buttonText: {
            type: String,
            required: true
        },
        pageLink: {
            type: String,
            required: true
        },
        imageSrc: {
            type: String,
            required: false
        }
    },
    methods: {
        navigateToPage() {
            this.$router.push(this.pageLink);
        }
    }
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{
            IonCol,
            IonCard,
            IonCardHeader,
            IonCardTitle,
            IonCardContent,
            IonButton,
            IonImg
        },
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.IonCol;
    /** @type { [typeof __VLS_components.IonCol, typeof __VLS_components.ionCol, typeof __VLS_components.IonCol, typeof __VLS_components.ionCol, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ size: ("12"), sizeMd: ("4"), }));
    const __VLS_2 = __VLS_1({ size: ("12"), sizeMd: ("4"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    const __VLS_7 = __VLS_resolvedLocalAndGlobalComponents.IonCard;
    /** @type { [typeof __VLS_components.IonCard, typeof __VLS_components.ionCard, typeof __VLS_components.IonCard, typeof __VLS_components.ionCard, ] } */
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({ ...{ class: ("text-center") }, }));
    const __VLS_9 = __VLS_8({ ...{ class: ("text-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    const __VLS_13 = __VLS_resolvedLocalAndGlobalComponents.IonCardHeader;
    /** @type { [typeof __VLS_components.IonCardHeader, typeof __VLS_components.ionCardHeader, typeof __VLS_components.IonCardHeader, typeof __VLS_components.ionCardHeader, ] } */
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({}));
    const __VLS_15 = __VLS_14({}, ...__VLS_functionalComponentArgsRest(__VLS_14));
    if (__VLS_ctx.imageSrc) {
        const __VLS_19 = __VLS_resolvedLocalAndGlobalComponents.IonImg;
        /** @type { [typeof __VLS_components.IonImg, typeof __VLS_components.ionImg, ] } */
        // @ts-ignore
        const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({ src: ((__VLS_ctx.imageSrc)), ...{ class: ("card-image") }, }));
        const __VLS_21 = __VLS_20({ src: ((__VLS_ctx.imageSrc)), ...{ class: ("card-image") }, }, ...__VLS_functionalComponentArgsRest(__VLS_20));
    }
    const __VLS_25 = __VLS_resolvedLocalAndGlobalComponents.IonCardTitle;
    /** @type { [typeof __VLS_components.IonCardTitle, typeof __VLS_components.ionCardTitle, typeof __VLS_components.IonCardTitle, typeof __VLS_components.ionCardTitle, ] } */
    // @ts-ignore
    const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({}));
    const __VLS_27 = __VLS_26({}, ...__VLS_functionalComponentArgsRest(__VLS_26));
    (__VLS_ctx.title);
    __VLS_nonNullable(__VLS_30.slots).default;
    var __VLS_30;
    __VLS_nonNullable(__VLS_18.slots).default;
    var __VLS_18;
    const __VLS_31 = __VLS_resolvedLocalAndGlobalComponents.IonCardContent;
    /** @type { [typeof __VLS_components.IonCardContent, typeof __VLS_components.ionCardContent, typeof __VLS_components.IonCardContent, typeof __VLS_components.ionCardContent, ] } */
    // @ts-ignore
    const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({}));
    const __VLS_33 = __VLS_32({}, ...__VLS_functionalComponentArgsRest(__VLS_32));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.description);
    const __VLS_37 = __VLS_resolvedLocalAndGlobalComponents.IonButton;
    /** @type { [typeof __VLS_components.IonButton, typeof __VLS_components.ionButton, typeof __VLS_components.IonButton, typeof __VLS_components.ionButton, ] } */
    // @ts-ignore
    const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({ ...{ 'onClick': {} }, expand: ("block"), }));
    const __VLS_39 = __VLS_38({ ...{ 'onClick': {} }, expand: ("block"), }, ...__VLS_functionalComponentArgsRest(__VLS_38));
    let __VLS_43;
    const __VLS_44 = {
        onClick: (__VLS_ctx.navigateToPage)
    };
    let __VLS_40;
    let __VLS_41;
    (__VLS_ctx.buttonText);
    __VLS_nonNullable(__VLS_42.slots).default;
    var __VLS_42;
    __VLS_nonNullable(__VLS_36.slots).default;
    var __VLS_36;
    __VLS_nonNullable(__VLS_12.slots).default;
    var __VLS_12;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['card-image'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
let __VLS_self;
