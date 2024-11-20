/// <reference types="../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import CrudComponent from '@/components/CrudComponent.vue';
import { getAllEstudiantes, saveEstudiantes, updateEstudiantes, deleteEstudiantes } from '@/services/estudiantes-service';
import { IonItem, IonLabel, IonInput, IonButton, IonModal, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon } from '@ionic/vue';
export default (await import('vue')).defineComponent({
    name: 'EstudiantesPage',
    components: {
        CrudComponent,
        IonItem,
        IonLabel,
        IonInput,
        IonButton,
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
                cedula: '',
                nombre: '',
                email: '',
                telefono: ''
            },
            estudiantes: []
        };
    },
    async mounted() {
        await this.loadEstudiantes();
    },
    methods: {
        async loadEstudiantes() {
            try {
                this.estudiantes = await getAllEstudiantes();
            }
            catch (error) {
                console.error('Error al cargar estudiantes:', error);
                alert('Error al cargar la lista de estudiantes');
            }
        },
        async saveEstudiantes() {
            try {
                if (this.currentItem.id) {
                    await updateEstudiantes(this.currentItem, this.currentItem.id);
                }
                else {
                    await saveEstudiantes(this.currentItem);
                }
                await this.loadEstudiantes();
                this.resetForm();
            }
            catch (error) {
                console.error('Error al guardar estudiantes:', error);
                alert('Error al guardar el estudiantes');
            }
        },
        async deleteEstudiantes(id) {
            try {
                await deleteEstudiantes(id);
                await this.loadEstudiantes();
            }
            catch (error) {
                console.error('Error al eliminar estudiantes:', error);
                alert('Error al eliminar el estudiantes');
            }
        },
        editEstudiantes(estudiantes) {
            this.currentItem = { ...estudiantes }; // Copiar los datos de estudiantes a currentItem
            this.$refs.crudComponent.openEditModal(); // Llamar al método en CrudComponent para abrir el modal
        },
        resetForm() {
            this.currentItem = { id: null, cedula: '', nombre: '', email: '', telefono: '' };
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
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onSave': {} }, ...{ 'onDelete': {} }, ...{ 'onEdit': {} }, ref: ("crudComponent"), title: ("Estudiantes"), items: ((__VLS_ctx.estudiantes)), currentItem: ((__VLS_ctx.currentItem)), }));
    const __VLS_2 = __VLS_1({ ...{ 'onSave': {} }, ...{ 'onDelete': {} }, ...{ 'onEdit': {} }, ref: ("crudComponent"), title: ("Estudiantes"), items: ((__VLS_ctx.estudiantes)), currentItem: ((__VLS_ctx.currentItem)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    // @ts-ignore navigation for `const crudComponent = ref()`
    __VLS_ctx.crudComponent;
    var __VLS_6 = {};
    let __VLS_7;
    const __VLS_8 = {
        onSave: (__VLS_ctx.saveEstudiantes)
    };
    const __VLS_9 = {
        onDelete: (__VLS_ctx.deleteEstudiantes)
    };
    const __VLS_10 = {
        onEdit: (__VLS_ctx.editEstudiantes)
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
        const __VLS_41 = __VLS_resolvedLocalAndGlobalComponents.IonInput;
        /** @type { [typeof __VLS_components.IonInput, typeof __VLS_components.ionInput, typeof __VLS_components.IonInput, typeof __VLS_components.ionInput, ] } */
        // @ts-ignore
        const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({ modelValue: ((__VLS_ctx.currentItem.cedula)), }));
        const __VLS_43 = __VLS_42({ modelValue: ((__VLS_ctx.currentItem.cedula)), }, ...__VLS_functionalComponentArgsRest(__VLS_42));
        __VLS_nonNullable(__VLS_34.slots).default;
        var __VLS_34;
        const __VLS_47 = __VLS_resolvedLocalAndGlobalComponents.IonItem;
        /** @type { [typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, ] } */
        // @ts-ignore
        const __VLS_48 = __VLS_asFunctionalComponent(__VLS_47, new __VLS_47({}));
        const __VLS_49 = __VLS_48({}, ...__VLS_functionalComponentArgsRest(__VLS_48));
        const __VLS_53 = __VLS_resolvedLocalAndGlobalComponents.IonLabel;
        /** @type { [typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, ] } */
        // @ts-ignore
        const __VLS_54 = __VLS_asFunctionalComponent(__VLS_53, new __VLS_53({ position: ("floating"), }));
        const __VLS_55 = __VLS_54({ position: ("floating"), }, ...__VLS_functionalComponentArgsRest(__VLS_54));
        __VLS_nonNullable(__VLS_58.slots).default;
        var __VLS_58;
        const __VLS_59 = __VLS_resolvedLocalAndGlobalComponents.IonInput;
        /** @type { [typeof __VLS_components.IonInput, typeof __VLS_components.ionInput, typeof __VLS_components.IonInput, typeof __VLS_components.ionInput, ] } */
        // @ts-ignore
        const __VLS_60 = __VLS_asFunctionalComponent(__VLS_59, new __VLS_59({ modelValue: ((__VLS_ctx.currentItem.telefono)), }));
        const __VLS_61 = __VLS_60({ modelValue: ((__VLS_ctx.currentItem.telefono)), }, ...__VLS_functionalComponentArgsRest(__VLS_60));
        __VLS_nonNullable(__VLS_52.slots).default;
        var __VLS_52;
        const __VLS_65 = __VLS_resolvedLocalAndGlobalComponents.IonItem;
        /** @type { [typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, typeof __VLS_components.IonItem, typeof __VLS_components.ionItem, ] } */
        // @ts-ignore
        const __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65({}));
        const __VLS_67 = __VLS_66({}, ...__VLS_functionalComponentArgsRest(__VLS_66));
        const __VLS_71 = __VLS_resolvedLocalAndGlobalComponents.IonLabel;
        /** @type { [typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, typeof __VLS_components.IonLabel, typeof __VLS_components.ionLabel, ] } */
        // @ts-ignore
        const __VLS_72 = __VLS_asFunctionalComponent(__VLS_71, new __VLS_71({ position: ("floating"), }));
        const __VLS_73 = __VLS_72({ position: ("floating"), }, ...__VLS_functionalComponentArgsRest(__VLS_72));
        __VLS_nonNullable(__VLS_76.slots).default;
        var __VLS_76;
        const __VLS_77 = __VLS_resolvedLocalAndGlobalComponents.IonInput;
        /** @type { [typeof __VLS_components.IonInput, typeof __VLS_components.ionInput, typeof __VLS_components.IonInput, typeof __VLS_components.ionInput, ] } */
        // @ts-ignore
        const __VLS_78 = __VLS_asFunctionalComponent(__VLS_77, new __VLS_77({ modelValue: ((__VLS_ctx.currentItem.email)), }));
        const __VLS_79 = __VLS_78({ modelValue: ((__VLS_ctx.currentItem.email)), }, ...__VLS_functionalComponentArgsRest(__VLS_78));
        __VLS_nonNullable(__VLS_70.slots).default;
        var __VLS_70;
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
