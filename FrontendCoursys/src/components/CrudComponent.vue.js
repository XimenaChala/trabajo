/// <reference types="../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import router from '@/router';
export default (await import('vue')).defineComponent({
    name: 'CrudComponent',
    props: {
        title: {
            type: String,
            required: true
        },
        items: {
            type: Array,
            default: () => []
        },
        currentItem: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            isModalOpen: false,
            modalTitle: ''
        };
    },
    methods: {
        goBack() {
            window.location.href = '/home';
        },
        openNewModal() {
            this.modalTitle = 'Nuevo Registro';
            this.$emit('update:currentItem', {});
            this.isModalOpen = true;
        },
        openEditModal() {
            this.modalTitle = 'Editar Registro';
            this.isModalOpen = true;
        },
        closeModal() {
            this.isModalOpen = false;
        },
        save() {
            this.$emit('save');
            this.closeModal();
        },
        deleteItem(id) {
            this.$emit('delete', id);
            this.closeModal();
        },
        handleEdit(item) {
            this.$emit('edit', item);
        },
        itemTitle(item) {
            return item.nombre || 'Sin titulo';
        },
        itemDetails(item) {
            const { id, ...details } = item;
            return details;
        }
    }
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
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
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.IonPage;
    /** @type { [typeof __VLS_components.IonPage, typeof __VLS_components.ionPage, typeof __VLS_components.IonPage, typeof __VLS_components.ionPage, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    const __VLS_7 = __VLS_resolvedLocalAndGlobalComponents.IonHeader;
    /** @type { [typeof __VLS_components.IonHeader, typeof __VLS_components.ionHeader, typeof __VLS_components.IonHeader, typeof __VLS_components.ionHeader, ] } */
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({}));
    const __VLS_9 = __VLS_8({}, ...__VLS_functionalComponentArgsRest(__VLS_8));
    const __VLS_13 = __VLS_resolvedLocalAndGlobalComponents.IonToolbar;
    /** @type { [typeof __VLS_components.IonToolbar, typeof __VLS_components.ionToolbar, typeof __VLS_components.IonToolbar, typeof __VLS_components.ionToolbar, ] } */
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({}));
    const __VLS_15 = __VLS_14({}, ...__VLS_functionalComponentArgsRest(__VLS_14));
    const __VLS_19 = __VLS_resolvedLocalAndGlobalComponents.IonTitle;
    /** @type { [typeof __VLS_components.IonTitle, typeof __VLS_components.ionTitle, typeof __VLS_components.IonTitle, typeof __VLS_components.ionTitle, ] } */
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({}));
    const __VLS_21 = __VLS_20({}, ...__VLS_functionalComponentArgsRest(__VLS_20));
    (__VLS_ctx.title);
    __VLS_nonNullable(__VLS_24.slots).default;
    var __VLS_24;
    __VLS_nonNullable(__VLS_18.slots).default;
    var __VLS_18;
    __VLS_nonNullable(__VLS_12.slots).default;
    var __VLS_12;
    const __VLS_25 = __VLS_resolvedLocalAndGlobalComponents.IonContent;
    /** @type { [typeof __VLS_components.IonContent, typeof __VLS_components.ionContent, typeof __VLS_components.IonContent, typeof __VLS_components.ionContent, ] } */
    // @ts-ignore
    const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({ fullscreen: ((true)), }));
    const __VLS_27 = __VLS_26({ fullscreen: ((true)), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("button-group") }, });
    const __VLS_31 = __VLS_resolvedLocalAndGlobalComponents.IonButton;
    /** @type { [typeof __VLS_components.IonButton, typeof __VLS_components.ionButton, typeof __VLS_components.IonButton, typeof __VLS_components.ionButton, ] } */
    // @ts-ignore
    const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({ ...{ 'onClick': {} }, }));
    const __VLS_33 = __VLS_32({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_32));
    let __VLS_37;
    const __VLS_38 = {
        onClick: (__VLS_ctx.goBack)
    };
    let __VLS_34;
    let __VLS_35;
    __VLS_nonNullable(__VLS_36.slots).default;
    var __VLS_36;
    const __VLS_39 = __VLS_resolvedLocalAndGlobalComponents.IonButton;
    /** @type { [typeof __VLS_components.IonButton, typeof __VLS_components.ionButton, typeof __VLS_components.IonButton, typeof __VLS_components.ionButton, ] } */
    // @ts-ignore
    const __VLS_40 = __VLS_asFunctionalComponent(__VLS_39, new __VLS_39({ ...{ 'onClick': {} }, }));
    const __VLS_41 = __VLS_40({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_40));
    let __VLS_45;
    const __VLS_46 = {
        onClick: (__VLS_ctx.openNewModal)
    };
    let __VLS_42;
    let __VLS_43;
    __VLS_nonNullable(__VLS_44.slots).default;
    var __VLS_44;
    const __VLS_47 = __VLS_resolvedLocalAndGlobalComponents.IonList;
    /** @type { [typeof __VLS_components.IonList, typeof __VLS_components.ionList, typeof __VLS_components.IonList, typeof __VLS_components.ionList, ] } */
    // @ts-ignore
    const __VLS_48 = __VLS_asFunctionalComponent(__VLS_47, new __VLS_47({}));
    const __VLS_49 = __VLS_48({}, ...__VLS_functionalComponentArgsRest(__VLS_48));
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.items))) {
        const __VLS_53 = __VLS_resolvedLocalAndGlobalComponents.IonCard;
        /** @type { [typeof __VLS_components.IonCard, typeof __VLS_components.ionCard, typeof __VLS_components.IonCard, typeof __VLS_components.ionCard, ] } */
        // @ts-ignore
        const __VLS_54 = __VLS_asFunctionalComponent(__VLS_53, new __VLS_53({ key: ((item.id)), }));
        const __VLS_55 = __VLS_54({ key: ((item.id)), }, ...__VLS_functionalComponentArgsRest(__VLS_54));
        const __VLS_59 = __VLS_resolvedLocalAndGlobalComponents.IonCardHeader;
        /** @type { [typeof __VLS_components.IonCardHeader, typeof __VLS_components.ionCardHeader, typeof __VLS_components.IonCardHeader, typeof __VLS_components.ionCardHeader, ] } */
        // @ts-ignore
        const __VLS_60 = __VLS_asFunctionalComponent(__VLS_59, new __VLS_59({}));
        const __VLS_61 = __VLS_60({}, ...__VLS_functionalComponentArgsRest(__VLS_60));
        const __VLS_65 = __VLS_resolvedLocalAndGlobalComponents.IonCardTitle;
        /** @type { [typeof __VLS_components.IonCardTitle, typeof __VLS_components.ionCardTitle, typeof __VLS_components.IonCardTitle, typeof __VLS_components.ionCardTitle, ] } */
        // @ts-ignore
        const __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65({}));
        const __VLS_67 = __VLS_66({}, ...__VLS_functionalComponentArgsRest(__VLS_66));
        (__VLS_ctx.itemTitle(item));
        __VLS_nonNullable(__VLS_70.slots).default;
        var __VLS_70;
        __VLS_nonNullable(__VLS_64.slots).default;
        var __VLS_64;
        const __VLS_71 = __VLS_resolvedLocalAndGlobalComponents.IonCardContent;
        /** @type { [typeof __VLS_components.IonCardContent, typeof __VLS_components.ionCardContent, typeof __VLS_components.IonCardContent, typeof __VLS_components.ionCardContent, ] } */
        // @ts-ignore
        const __VLS_72 = __VLS_asFunctionalComponent(__VLS_71, new __VLS_71({}));
        const __VLS_73 = __VLS_72({}, ...__VLS_functionalComponentArgsRest(__VLS_72));
        for (const [value, key] of __VLS_getVForSourceType((__VLS_ctx.itemDetails(item)))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ key: ((key)), });
            (key);
            (value);
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("button-group") }, });
        const __VLS_77 = __VLS_resolvedLocalAndGlobalComponents.IonButton;
        /** @type { [typeof __VLS_components.IonButton, typeof __VLS_components.ionButton, typeof __VLS_components.IonButton, typeof __VLS_components.ionButton, ] } */
        // @ts-ignore
        const __VLS_78 = __VLS_asFunctionalComponent(__VLS_77, new __VLS_77({ ...{ 'onClick': {} }, color: ("primary"), size: ("small"), }));
        const __VLS_79 = __VLS_78({ ...{ 'onClick': {} }, color: ("primary"), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_78));
        let __VLS_83;
        const __VLS_84 = {
            onClick: (...[$event]) => {
                __VLS_ctx.handleEdit(item);
            }
        };
        let __VLS_80;
        let __VLS_81;
        const __VLS_85 = __VLS_resolvedLocalAndGlobalComponents.IonIcon;
        /** @type { [typeof __VLS_components.IonIcon, typeof __VLS_components.ionIcon, typeof __VLS_components.IonIcon, typeof __VLS_components.ionIcon, ] } */
        // @ts-ignore
        const __VLS_86 = __VLS_asFunctionalComponent(__VLS_85, new __VLS_85({ slot: ("start"), name: ("create-outline"), }));
        const __VLS_87 = __VLS_86({ slot: ("start"), name: ("create-outline"), }, ...__VLS_functionalComponentArgsRest(__VLS_86));
        __VLS_nonNullable(__VLS_82.slots).default;
        var __VLS_82;
        const __VLS_91 = __VLS_resolvedLocalAndGlobalComponents.IonButton;
        /** @type { [typeof __VLS_components.IonButton, typeof __VLS_components.ionButton, typeof __VLS_components.IonButton, typeof __VLS_components.ionButton, ] } */
        // @ts-ignore
        const __VLS_92 = __VLS_asFunctionalComponent(__VLS_91, new __VLS_91({ ...{ 'onClick': {} }, color: ("danger"), size: ("small"), }));
        const __VLS_93 = __VLS_92({ ...{ 'onClick': {} }, color: ("danger"), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_92));
        let __VLS_97;
        const __VLS_98 = {
            onClick: (...[$event]) => {
                __VLS_ctx.deleteItem(item.id);
            }
        };
        let __VLS_94;
        let __VLS_95;
        const __VLS_99 = __VLS_resolvedLocalAndGlobalComponents.IonIcon;
        /** @type { [typeof __VLS_components.IonIcon, typeof __VLS_components.ionIcon, typeof __VLS_components.IonIcon, typeof __VLS_components.ionIcon, ] } */
        // @ts-ignore
        const __VLS_100 = __VLS_asFunctionalComponent(__VLS_99, new __VLS_99({ slot: ("start"), name: ("trash-outline"), }));
        const __VLS_101 = __VLS_100({ slot: ("start"), name: ("trash-outline"), }, ...__VLS_functionalComponentArgsRest(__VLS_100));
        __VLS_nonNullable(__VLS_96.slots).default;
        var __VLS_96;
        __VLS_nonNullable(__VLS_76.slots).default;
        var __VLS_76;
        __VLS_nonNullable(__VLS_58.slots).default;
        var __VLS_58;
    }
    __VLS_nonNullable(__VLS_52.slots).default;
    var __VLS_52;
    const __VLS_105 = __VLS_resolvedLocalAndGlobalComponents.IonModal;
    /** @type { [typeof __VLS_components.IonModal, typeof __VLS_components.ionModal, typeof __VLS_components.IonModal, typeof __VLS_components.ionModal, ] } */
    // @ts-ignore
    const __VLS_106 = __VLS_asFunctionalComponent(__VLS_105, new __VLS_105({ ...{ 'onDidDismiss': {} }, isOpen: ((__VLS_ctx.isModalOpen)), }));
    const __VLS_107 = __VLS_106({ ...{ 'onDidDismiss': {} }, isOpen: ((__VLS_ctx.isModalOpen)), }, ...__VLS_functionalComponentArgsRest(__VLS_106));
    let __VLS_111;
    const __VLS_112 = {
        onDidDismiss: (__VLS_ctx.closeModal)
    };
    let __VLS_108;
    let __VLS_109;
    const __VLS_113 = __VLS_resolvedLocalAndGlobalComponents.IonHeader;
    /** @type { [typeof __VLS_components.IonHeader, typeof __VLS_components.ionHeader, typeof __VLS_components.IonHeader, typeof __VLS_components.ionHeader, ] } */
    // @ts-ignore
    const __VLS_114 = __VLS_asFunctionalComponent(__VLS_113, new __VLS_113({}));
    const __VLS_115 = __VLS_114({}, ...__VLS_functionalComponentArgsRest(__VLS_114));
    const __VLS_119 = __VLS_resolvedLocalAndGlobalComponents.IonToolbar;
    /** @type { [typeof __VLS_components.IonToolbar, typeof __VLS_components.ionToolbar, typeof __VLS_components.IonToolbar, typeof __VLS_components.ionToolbar, ] } */
    // @ts-ignore
    const __VLS_120 = __VLS_asFunctionalComponent(__VLS_119, new __VLS_119({}));
    const __VLS_121 = __VLS_120({}, ...__VLS_functionalComponentArgsRest(__VLS_120));
    const __VLS_125 = __VLS_resolvedLocalAndGlobalComponents.IonTitle;
    /** @type { [typeof __VLS_components.IonTitle, typeof __VLS_components.ionTitle, typeof __VLS_components.IonTitle, typeof __VLS_components.ionTitle, ] } */
    // @ts-ignore
    const __VLS_126 = __VLS_asFunctionalComponent(__VLS_125, new __VLS_125({}));
    const __VLS_127 = __VLS_126({}, ...__VLS_functionalComponentArgsRest(__VLS_126));
    (__VLS_ctx.modalTitle);
    __VLS_nonNullable(__VLS_130.slots).default;
    var __VLS_130;
    const __VLS_131 = __VLS_resolvedLocalAndGlobalComponents.IonButtons;
    /** @type { [typeof __VLS_components.IonButtons, typeof __VLS_components.ionButtons, typeof __VLS_components.IonButtons, typeof __VLS_components.ionButtons, ] } */
    // @ts-ignore
    const __VLS_132 = __VLS_asFunctionalComponent(__VLS_131, new __VLS_131({ slot: ("end"), }));
    const __VLS_133 = __VLS_132({ slot: ("end"), }, ...__VLS_functionalComponentArgsRest(__VLS_132));
    const __VLS_137 = __VLS_resolvedLocalAndGlobalComponents.IonButton;
    /** @type { [typeof __VLS_components.IonButton, typeof __VLS_components.ionButton, typeof __VLS_components.IonButton, typeof __VLS_components.ionButton, ] } */
    // @ts-ignore
    const __VLS_138 = __VLS_asFunctionalComponent(__VLS_137, new __VLS_137({ ...{ 'onClick': {} }, }));
    const __VLS_139 = __VLS_138({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_138));
    let __VLS_143;
    const __VLS_144 = {
        onClick: (__VLS_ctx.closeModal)
    };
    let __VLS_140;
    let __VLS_141;
    __VLS_nonNullable(__VLS_142.slots).default;
    var __VLS_142;
    __VLS_nonNullable(__VLS_136.slots).default;
    var __VLS_136;
    __VLS_nonNullable(__VLS_124.slots).default;
    var __VLS_124;
    __VLS_nonNullable(__VLS_118.slots).default;
    var __VLS_118;
    const __VLS_145 = __VLS_resolvedLocalAndGlobalComponents.IonContent;
    /** @type { [typeof __VLS_components.IonContent, typeof __VLS_components.ionContent, typeof __VLS_components.IonContent, typeof __VLS_components.ionContent, ] } */
    // @ts-ignore
    const __VLS_146 = __VLS_asFunctionalComponent(__VLS_145, new __VLS_145({}));
    const __VLS_147 = __VLS_146({}, ...__VLS_functionalComponentArgsRest(__VLS_146));
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.save) }, });
    var __VLS_151 = {};
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("modal-actions") }, });
    const __VLS_152 = __VLS_resolvedLocalAndGlobalComponents.IonButton;
    /** @type { [typeof __VLS_components.IonButton, typeof __VLS_components.ionButton, typeof __VLS_components.IonButton, typeof __VLS_components.ionButton, ] } */
    // @ts-ignore
    const __VLS_153 = __VLS_asFunctionalComponent(__VLS_152, new __VLS_152({ type: ("submit"), expand: ("block"), }));
    const __VLS_154 = __VLS_153({ type: ("submit"), expand: ("block"), }, ...__VLS_functionalComponentArgsRest(__VLS_153));
    __VLS_nonNullable(__VLS_157.slots).default;
    var __VLS_157;
    __VLS_nonNullable(__VLS_150.slots).default;
    var __VLS_150;
    __VLS_nonNullable(__VLS_110.slots).default;
    var __VLS_110;
    __VLS_nonNullable(__VLS_30.slots).default;
    var __VLS_30;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_styleScopedClasses['button-group'];
    __VLS_styleScopedClasses['button-group'];
    __VLS_styleScopedClasses['modal-actions'];
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
