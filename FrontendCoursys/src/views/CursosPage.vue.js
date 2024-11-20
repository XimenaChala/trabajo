/// <reference types="../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import CrudComponent from '@/components/CrudComponent.vue';
import { getAllCursos, saveCursos, updateCursos, deleteCursos } from '@/services/cursos-service';
import { getAllProfesores } from '@/services/profesores-service';
import { getAllEstudiantes } from '@/services/estudiantes-service';
import { IonItem, IonLabel, IonInput, IonButton, IonSelect, IonSelectOption, IonDatetime, IonModal, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon } from '@ionic/vue';
export default (await import('vue')).defineComponent({
    name: 'CursosPage',
    components: {
        CrudComponent,
        IonItem,
        IonLabel,
        IonInput,
        IonButton,
        IonSelect,
        IonSelectOption,
        IonDatetime,
        IonModal,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonPage,
        IonCard,
        IonCardHeader,
        IonCardTitle,
        IonCardContent,
        IonIcon
    },
    data() {
        return {
            currentItem: {
                id: null,
                nombre: null,
                estudiantesId: { id: null },
                profesoresId: { id: null },
                horas: null,
                precio: null,
                fechaInicio: null,
            },
            Cursos: [],
            profesores: [],
            estudiantes: [],
            processedCursos: [], // Lista procesada para mostrar en CrudComponent
        };
    },
    async mounted() {
        await this.loadCursos();
        await this.loadProfesores();
        await this.loadEstudiantes();
    },
    methods: {
        async loadCursos() {
            try {
                const cursosData = await getAllCursos();
                // Procesar la data para que solo contenga los campos necesarios
                this.processedCursos = cursosData.map((item, index) => ({
                    id: item.id,
                    nombre: item.nombre,
                    estudiantesId: item.estudiantesId,
                    profesoresId: item.profesoresId,
                    horas: item.horas,
                    precio: item.precio,
                    fechaInicio: item.fechaInicio
                }));
            }
            catch (error) {
                console.error('Error al cargar cursos del cliente:', error);
                alert('Error al cargar la lista de cursos del cliente');
            }
        },
        async loadProfesores() {
            try {
                this.profesores = await getAllProfesores();
            }
            catch (error) {
                console.error('Error al cargar profesores:', error);
                alert('Error al cargar la lista de profesores');
            }
        },
        async loadEstudiantes() {
            try {
                this.estudiantes = await getAllEstudiantes();
            }
            catch (error) {
                console.error('Error al cargar estudiantes:', error);
                alert('Error al cargar la lista de estudiantes');
            }
        },
        async saveCursos() {
            try {
                if (this.currentItem.id) {
                    await updateCursos(this.currentItem, this.currentItem.id);
                }
                else {
                    await saveCursos(this.currentItem);
                }
                await this.loadCursos();
                this.resetForm();
            }
            catch (error) {
                console.error('Error al guardar cursos del cliente:', error);
                alert('Error al guardar los cursos del cliente');
            }
        },
        async deleteCursos(id) {
            try {
                await deleteCursos(id);
                await this.loadCursos();
            }
            catch (error) {
                console.error('Error al eliminar cursos del cliente:', error);
                alert('Error al eliminar los cursos del cliente');
            }
        },
        editCursos(cursos) {
            this.currentItem = { ...cursos };
            this.$refs.crudComponent.openEditModal();
        },
        resetForm() {
            this.currentItem = { id: null, nombre: null, estudiantesId: { id: null }, profesoresIdId: { id: null }, horas: null, precio: null, fechaInicio: null };
        }
    }
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{
            CrudComponent,
            IonItem,
            IonLabel,
            IonInput,
            IonButton,
            IonSelect,
            IonSelectOption,
            IonDatetime,
            IonModal,
            IonHeader,
            IonToolbar,
            IonTitle,
            IonContent,
            IonPage,
            IonCard,
            IonCardHeader,
            IonCardTitle,
            IonCardContent,
            IonIcon
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
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.CrudComponent;
    /** @type { [typeof __VLS_components.CrudComponent, typeof __VLS_components.CrudComponent, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onSave': {} }, ...{ 'onDelete': {} }, ...{ 'onEdit': {} }, ref: ("crudComponent"), title: ("Cursos"), items: ((__VLS_ctx.processedCursos)), currentItem: ((__VLS_ctx.currentItem)), }));
    const __VLS_2 = __VLS_1({ ...{ 'onSave': {} }, ...{ 'onDelete': {} }, ...{ 'onEdit': {} }, ref: ("crudComponent"), title: ("Cursos"), items: ((__VLS_ctx.processedCursos)), currentItem: ((__VLS_ctx.currentItem)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    // @ts-ignore navigation for `const crudComponent = ref()`
    __VLS_ctx.crudComponent;
    var __VLS_6 = {};
    let __VLS_7;
    const __VLS_8 = {
        onSave: (__VLS_ctx.saveCursos)
    };
    const __VLS_9 = {
        onDelete: (__VLS_ctx.deleteCursos)
    };
    const __VLS_10 = {
        onEdit: (__VLS_ctx.editCursos)
    };
    let __VLS_3;
    let __VLS_4;
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { form: __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
        const __VLS_11 = __VLS_resolvedLocalAndGlobalComponents.IonItem;
        /** @type { [typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, ] } */
        // @ts-ignore
        const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({}));
        const __VLS_13 = __VLS_12({}, ...__VLS_functionalComponentArgsRest(__VLS_12));
        const __VLS_17 = __VLS_resolvedLocalAndGlobalComponents.IonLabel;
        /** @type { [typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, ] } */
        // @ts-ignore
        const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({ position: ("floating"), }));
        const __VLS_19 = __VLS_18({ position: ("floating"), }, ...__VLS_functionalComponentArgsRest(__VLS_18));
        __VLS_nonNullable(__VLS_22.slots).default;
        var __VLS_22;
        const __VLS_23 = __VLS_resolvedLocalAndGlobalComponents.IonInput;
        /** @type { [typeof __VLS_components.IonInput, typeof __VLS_components.ionInput, typeof __VLS_components.IonInput, typeof __VLS_components.ionInput, ] } */
        // @ts-ignore
        const __VLS_24 = __VLS_asFunctionalComponent(__VLS_23, new __VLS_23({ modelValue: ((__VLS_ctx.currentItem.nombre)), }));
        const __VLS_25 = __VLS_24({ modelValue: ((__VLS_ctx.currentItem.nombre)), }, ...__VLS_functionalComponentArgsRest(__VLS_24));
        __VLS_nonNullable(__VLS_16.slots).default;
        var __VLS_16;
        const __VLS_29 = __VLS_resolvedLocalAndGlobalComponents.IonItem;
        /** @type { [typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, ] } */
        // @ts-ignore
        const __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({}));
        const __VLS_31 = __VLS_30({}, ...__VLS_functionalComponentArgsRest(__VLS_30));
        const __VLS_35 = __VLS_resolvedLocalAndGlobalComponents.IonLabel;
        /** @type { [typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, ] } */
        // @ts-ignore
        const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({ position: ("floating"), }));
        const __VLS_37 = __VLS_36({ position: ("floating"), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
        __VLS_nonNullable(__VLS_40.slots).default;
        var __VLS_40;
        const __VLS_41 = __VLS_resolvedLocalAndGlobalComponents.IonSelect;
        /** @type { [typeof __VLS_components.IonSelect, typeof __VLS_components.ionSelect, typeof __VLS_components.IonSelect, typeof __VLS_components.ionSelect, ] } */
        // @ts-ignore
        const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({ modelValue: ((__VLS_ctx.currentItem.estudiantesId.id)), interface: ("popover"), }));
        const __VLS_43 = __VLS_42({ modelValue: ((__VLS_ctx.currentItem.estudiantesId.id)), interface: ("popover"), }, ...__VLS_functionalComponentArgsRest(__VLS_42));
        for (const [estudiantes] of __VLS_getVForSourceType((__VLS_ctx.estudiantes))) {
            const __VLS_47 = __VLS_resolvedLocalAndGlobalComponents.IonSelectOption;
            /** @type { [typeof __VLS_components.IonSelectOption, typeof __VLS_components.ionSelectOption, typeof __VLS_components.IonSelectOption, typeof __VLS_components.ionSelectOption, ] } */
            // @ts-ignore
            const __VLS_48 = __VLS_asFunctionalComponent(__VLS_47, new __VLS_47({ key: ((estudiantes.id)), value: ((estudiantes.id)), }));
            const __VLS_49 = __VLS_48({ key: ((estudiantes.id)), value: ((estudiantes.id)), }, ...__VLS_functionalComponentArgsRest(__VLS_48));
            (estudiantes.nombre);
            __VLS_nonNullable(__VLS_52.slots).default;
            var __VLS_52;
        }
        __VLS_nonNullable(__VLS_46.slots).default;
        var __VLS_46;
        __VLS_nonNullable(__VLS_34.slots).default;
        var __VLS_34;
        const __VLS_53 = __VLS_resolvedLocalAndGlobalComponents.IonItem;
        /** @type { [typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, ] } */
        // @ts-ignore
        const __VLS_54 = __VLS_asFunctionalComponent(__VLS_53, new __VLS_53({}));
        const __VLS_55 = __VLS_54({}, ...__VLS_functionalComponentArgsRest(__VLS_54));
        const __VLS_59 = __VLS_resolvedLocalAndGlobalComponents.IonLabel;
        /** @type { [typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, ] } */
        // @ts-ignore
        const __VLS_60 = __VLS_asFunctionalComponent(__VLS_59, new __VLS_59({ position: ("floating"), }));
        const __VLS_61 = __VLS_60({ position: ("floating"), }, ...__VLS_functionalComponentArgsRest(__VLS_60));
        __VLS_nonNullable(__VLS_64.slots).default;
        var __VLS_64;
        const __VLS_65 = __VLS_resolvedLocalAndGlobalComponents.IonSelect;
        /** @type { [typeof __VLS_components.IonSelect, typeof __VLS_components.ionSelect, typeof __VLS_components.IonSelect, typeof __VLS_components.ionSelect, ] } */
        // @ts-ignore
        const __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65({ modelValue: ((__VLS_ctx.currentItem.profesoresId.id)), interface: ("popover"), }));
        const __VLS_67 = __VLS_66({ modelValue: ((__VLS_ctx.currentItem.profesoresId.id)), interface: ("popover"), }, ...__VLS_functionalComponentArgsRest(__VLS_66));
        for (const [profesores] of __VLS_getVForSourceType((__VLS_ctx.profesores))) {
            const __VLS_71 = __VLS_resolvedLocalAndGlobalComponents.IonSelectOption;
            /** @type { [typeof __VLS_components.IonSelectOption, typeof __VLS_components.ionSelectOption, typeof __VLS_components.IonSelectOption, typeof __VLS_components.ionSelectOption, ] } */
            // @ts-ignore
            const __VLS_72 = __VLS_asFunctionalComponent(__VLS_71, new __VLS_71({ key: ((profesores.id)), value: ((profesores.id)), }));
            const __VLS_73 = __VLS_72({ key: ((profesores.id)), value: ((profesores.id)), }, ...__VLS_functionalComponentArgsRest(__VLS_72));
            (profesores.nombre);
            __VLS_nonNullable(__VLS_76.slots).default;
            var __VLS_76;
        }
        __VLS_nonNullable(__VLS_70.slots).default;
        var __VLS_70;
        __VLS_nonNullable(__VLS_58.slots).default;
        var __VLS_58;
        const __VLS_77 = __VLS_resolvedLocalAndGlobalComponents.IonItem;
        /** @type { [typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, ] } */
        // @ts-ignore
        const __VLS_78 = __VLS_asFunctionalComponent(__VLS_77, new __VLS_77({}));
        const __VLS_79 = __VLS_78({}, ...__VLS_functionalComponentArgsRest(__VLS_78));
        const __VLS_83 = __VLS_resolvedLocalAndGlobalComponents.IonLabel;
        /** @type { [typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, ] } */
        // @ts-ignore
        const __VLS_84 = __VLS_asFunctionalComponent(__VLS_83, new __VLS_83({ position: ("floating"), }));
        const __VLS_85 = __VLS_84({ position: ("floating"), }, ...__VLS_functionalComponentArgsRest(__VLS_84));
        __VLS_nonNullable(__VLS_88.slots).default;
        var __VLS_88;
        const __VLS_89 = __VLS_resolvedLocalAndGlobalComponents.IonInput;
        /** @type { [typeof __VLS_components.IonInput, typeof __VLS_components.ionInput, typeof __VLS_components.IonInput, typeof __VLS_components.ionInput, ] } */
        // @ts-ignore
        const __VLS_90 = __VLS_asFunctionalComponent(__VLS_89, new __VLS_89({ modelValue: ((__VLS_ctx.currentItem.horas)), }));
        const __VLS_91 = __VLS_90({ modelValue: ((__VLS_ctx.currentItem.horas)), }, ...__VLS_functionalComponentArgsRest(__VLS_90));
        __VLS_nonNullable(__VLS_82.slots).default;
        var __VLS_82;
        const __VLS_95 = __VLS_resolvedLocalAndGlobalComponents.IonItem;
        /** @type { [typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, ] } */
        // @ts-ignore
        const __VLS_96 = __VLS_asFunctionalComponent(__VLS_95, new __VLS_95({}));
        const __VLS_97 = __VLS_96({}, ...__VLS_functionalComponentArgsRest(__VLS_96));
        const __VLS_101 = __VLS_resolvedLocalAndGlobalComponents.IonLabel;
        /** @type { [typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, ] } */
        // @ts-ignore
        const __VLS_102 = __VLS_asFunctionalComponent(__VLS_101, new __VLS_101({ position: ("floating"), }));
        const __VLS_103 = __VLS_102({ position: ("floating"), }, ...__VLS_functionalComponentArgsRest(__VLS_102));
        __VLS_nonNullable(__VLS_106.slots).default;
        var __VLS_106;
        const __VLS_107 = __VLS_resolvedLocalAndGlobalComponents.IonInput;
        /** @type { [typeof __VLS_components.IonInput, typeof __VLS_components.ionInput, typeof __VLS_components.IonInput, typeof __VLS_components.ionInput, ] } */
        // @ts-ignore
        const __VLS_108 = __VLS_asFunctionalComponent(__VLS_107, new __VLS_107({ modelValue: ((__VLS_ctx.currentItem.precio)), }));
        const __VLS_109 = __VLS_108({ modelValue: ((__VLS_ctx.currentItem.precio)), }, ...__VLS_functionalComponentArgsRest(__VLS_108));
        __VLS_nonNullable(__VLS_100.slots).default;
        var __VLS_100;
        const __VLS_113 = __VLS_resolvedLocalAndGlobalComponents.IonItem;
        /** @type { [typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, ] } */
        // @ts-ignore
        const __VLS_114 = __VLS_asFunctionalComponent(__VLS_113, new __VLS_113({}));
        const __VLS_115 = __VLS_114({}, ...__VLS_functionalComponentArgsRest(__VLS_114));
        const __VLS_119 = __VLS_resolvedLocalAndGlobalComponents.IonLabel;
        /** @type { [typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, ] } */
        // @ts-ignore
        const __VLS_120 = __VLS_asFunctionalComponent(__VLS_119, new __VLS_119({ position: ("floating"), }));
        const __VLS_121 = __VLS_120({ position: ("floating"), }, ...__VLS_functionalComponentArgsRest(__VLS_120));
        __VLS_nonNullable(__VLS_124.slots).default;
        var __VLS_124;
        const __VLS_125 = __VLS_resolvedLocalAndGlobalComponents.IonDatetime;
        /** @type { [typeof __VLS_components.IonDatetime, typeof __VLS_components.ionDatetime, typeof __VLS_components.IonDatetime, typeof __VLS_components.ionDatetime, ] } */
        // @ts-ignore
        const __VLS_126 = __VLS_asFunctionalComponent(__VLS_125, new __VLS_125({ modelValue: ((__VLS_ctx.currentItem.fechaInicio)), displayFormat: ("YYYY-MM-DD"), placeholder: ("Selecciona una fecha"), }));
        const __VLS_127 = __VLS_126({ modelValue: ((__VLS_ctx.currentItem.fechaInicio)), displayFormat: ("YYYY-MM-DD"), placeholder: ("Selecciona una fecha"), }, ...__VLS_functionalComponentArgsRest(__VLS_126));
        __VLS_nonNullable(__VLS_118.slots).default;
        var __VLS_118;
    }
    var __VLS_5;
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "crudComponent": __VLS_6,
    };
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
