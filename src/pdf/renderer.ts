import ReactFiberReconciler from 'react-reconciler';

const renderer = ReactFiberReconciler({
  supportsMutation: true,

  isPrimaryRenderer: false,

  supportsPersistence: false,

  supportsHydration: false,

  cancelTimeout(id: any) {},

  scheduleTimeout(fn: (...args: unknown[]) => unknown, delay?: number): any {
    return setTimeout(fn, delay);
  },

  noTimeout: true,

  preparePortalMount(containerInfo: any) {},

  appendInitialChild(parentInstance: any, child) {
    parentInstance.children.push(child);
  },

  createInstance(type, { style, children, ...props }) {
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

  resetAfterCommit() {},

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

  appendChild(parentInstance: any, child) {
    parentInstance.children.push(child);
  },

  appendChildToContainer(parentInstance: any, child) {
    if (parentInstance.type === 'ROOT') {
      parentInstance.document = child;
    } else {
      parentInstance.children.push(child);
    }
  },

  insertBefore(parentInstance: any, child, beforeChild) {
    const index = parentInstance.children?.indexOf(beforeChild);

    if (index === undefined) return;

    if (index !== -1 && child) parentInstance.children.splice(index, 0, child);
  },

  removeChild(parentInstance: any, child) {
    const index = parentInstance.children?.indexOf(child);

    if (index === undefined) return;

    if (index !== -1) parentInstance.children.splice(index, 1);
  },

  removeChildFromContainer(parentInstance: any, child) {
    const index = parentInstance.children?.indexOf(child);

    if (index === undefined) return;

    if (index !== -1) parentInstance.children.splice(index, 1);
  },

  commitTextUpdate(textInstance: any, oldText, newText) {
    textInstance.value = newText;
  },

  commitUpdate(instance: any, updatePayload, type, oldProps, newProps: any) {
    const { style, ...props } = newProps;
    instance.props = props;
    instance.style = style;
  },
});

export default renderer;
