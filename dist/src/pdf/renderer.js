"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_reconciler_1 = __importDefault(require("react-reconciler"));
const renderer = (0, react_reconciler_1.default)({
    supportsMutation: true,
    isPrimaryRenderer: false,
    supportsPersistence: false,
    supportsHydration: false,
    cancelTimeout(id) { },
    scheduleTimeout(fn, delay) {
        return setTimeout(fn, delay);
    },
    noTimeout: true,
    preparePortalMount(containerInfo) { },
    appendInitialChild(parentInstance, child) {
        parentInstance.children.push(child);
    },
    createInstance(type, _a) {
        var { style, children } = _a, props = __rest(_a, ["style", "children"]);
        return {
            type,
            box: {},
            style: style || {},
            props: props || {},
            children: [],
        };
    },
    createTextInstance(text, rootContainerInstance) {
        return { type: 'TEXT_INSTANCE', value: text };
    },
    finalizeInitialChildren(element, type, props) {
        return false;
    },
    getPublicInstance(instance) {
        return instance;
    },
    prepareForCommit() {
        return null;
    },
    clearContainer() {
        // Noop
    },
    prepareUpdate(element, type, oldProps, newProps) {
        return true;
    },
    resetAfterCommit() { },
    resetTextContent(element) {
        // Noop
    },
    getRootHostContext() {
        return {};
    },
    getChildHostContext() {
        return {};
    },
    shouldSetTextContent(type, props) {
        return false;
    },
    now: Date.now,
    appendChild(parentInstance, child) {
        parentInstance.children.push(child);
    },
    appendChildToContainer(parentInstance, child) {
        if (parentInstance.type === 'ROOT') {
            parentInstance.document = child;
        }
        else {
            parentInstance.children.push(child);
        }
    },
    insertBefore(parentInstance, child, beforeChild) {
        var _a;
        const index = (_a = parentInstance.children) === null || _a === void 0 ? void 0 : _a.indexOf(beforeChild);
        if (index === undefined)
            return;
        if (index !== -1 && child)
            parentInstance.children.splice(index, 0, child);
    },
    removeChild(parentInstance, child) {
        var _a;
        const index = (_a = parentInstance.children) === null || _a === void 0 ? void 0 : _a.indexOf(child);
        if (index === undefined)
            return;
        if (index !== -1)
            parentInstance.children.splice(index, 1);
    },
    removeChildFromContainer(parentInstance, child) {
        var _a;
        const index = (_a = parentInstance.children) === null || _a === void 0 ? void 0 : _a.indexOf(child);
        if (index === undefined)
            return;
        if (index !== -1)
            parentInstance.children.splice(index, 1);
    },
    commitTextUpdate(textInstance, oldText, newText) {
        textInstance.value = newText;
    },
    commitUpdate(instance, updatePayload, type, oldProps, newProps) {
        const { style } = newProps, props = __rest(newProps, ["style"]);
        instance.props = props;
        instance.style = style;
    },
});
exports.default = renderer;
//# sourceMappingURL=renderer.js.map