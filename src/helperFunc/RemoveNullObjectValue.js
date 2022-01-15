export default function RemoveNullObjectValue(params) {
    return Object.entries(params).reduce(
        (prev, [key, value]) => (value ? { ...prev, [key]: value } : prev),
        {}
    );
}