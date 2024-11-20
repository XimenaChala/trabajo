/// <reference types="../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow } from '@ionic/vue';
import CardComponent from '@/components/CardComponent.vue';
export default (await import('vue')).defineComponent({
    name: 'HomePage',
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonGrid,
        IonRow,
        CardComponent
    }
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{
            IonPage,
            IonHeader,
            IonToolbar,
            IonTitle,
            IonContent,
            IonGrid,
            IonRow,
            CardComponent
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
    const __VLS_31 = __VLS_resolvedLocalAndGlobalComponents.IonGrid;
    /** @type { [typeof __VLS_components.IonGrid, typeof __VLS_components.ionGrid, typeof __VLS_components.IonGrid, typeof __VLS_components.ionGrid, ] } */
    // @ts-ignore
    const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({}));
    const __VLS_33 = __VLS_32({}, ...__VLS_functionalComponentArgsRest(__VLS_32));
    const __VLS_37 = __VLS_resolvedLocalAndGlobalComponents.IonRow;
    /** @type { [typeof __VLS_components.IonRow, typeof __VLS_components.ionRow, typeof __VLS_components.IonRow, typeof __VLS_components.ionRow, ] } */
    // @ts-ignore
    const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({}));
    const __VLS_39 = __VLS_38({}, ...__VLS_functionalComponentArgsRest(__VLS_38));
    const __VLS_43 = __VLS_resolvedLocalAndGlobalComponents.CardComponent;
    /** @type { [typeof __VLS_components.CardComponent, ] } */
    // @ts-ignore
    const __VLS_44 = __VLS_asFunctionalComponent(__VLS_43, new __VLS_43({ title: ("Estudiantes"), description: ("Administrar registro de estudiantes en el sistema."), buttonText: ("Gestionar Estudiantes"), pageLink: ("/estudiantes"), imageSrc: ("/src/imagenes/Estudiantes.png"), }));
    const __VLS_45 = __VLS_44({ title: ("Estudiantes"), description: ("Administrar registro de estudiantes en el sistema."), buttonText: ("Gestionar Estudiantes"), pageLink: ("/estudiantes"), imageSrc: ("/src/imagenes/Estudiantes.png"), }, ...__VLS_functionalComponentArgsRest(__VLS_44));
    const __VLS_49 = __VLS_resolvedLocalAndGlobalComponents.CardComponent;
    /** @type { [typeof __VLS_components.CardComponent, ] } */
    // @ts-ignore
    const __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({ title: ("Profesores"), description: ("Administrar registro de profesores en el sistema."), buttonText: ("Gestionar Profesores"), pageLink: ("/profesores"), imageSrc: ("/src/imagenes/Profesores.png"), }));
    const __VLS_51 = __VLS_50({ title: ("Profesores"), description: ("Administrar registro de profesores en el sistema."), buttonText: ("Gestionar Profesores"), pageLink: ("/profesores"), imageSrc: ("/src/imagenes/Profesores.png"), }, ...__VLS_functionalComponentArgsRest(__VLS_50));
    const __VLS_55 = __VLS_resolvedLocalAndGlobalComponents.CardComponent;
    /** @type { [typeof __VLS_components.CardComponent, ] } */
    // @ts-ignore
    const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({ title: ("Cursos"), description: ("Administrar registro de cursos."), buttonText: ("Gestionar Cursos"), pageLink: ("/cursos"), imageSrc: ("/src/imagenes/Cursos.png"), }));
    const __VLS_57 = __VLS_56({ title: ("Cursos"), description: ("Administrar registro de cursos."), buttonText: ("Gestionar Cursos"), pageLink: ("/cursos"), imageSrc: ("/src/imagenes/Cursos.png"), }, ...__VLS_functionalComponentArgsRest(__VLS_56));
    __VLS_nonNullable(__VLS_42.slots).default;
    var __VLS_42;
    __VLS_nonNullable(__VLS_36.slots).default;
    var __VLS_36;
    __VLS_nonNullable(__VLS_30.slots).default;
    var __VLS_30;
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
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
