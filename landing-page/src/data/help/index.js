// Aggregates per-topic JSON files into a single exported object for the app.
// Auto-includes all JSON files in this folder so you can edit per-topic files
// without updating an explicit order list.
const modules = import.meta.globEager("./*.json");

// Map and sort by filename to keep stable ordering. Each module may export JSON as default.
const topics = Object.keys(modules)
  .sort()
  .map((key) =>
    modules[key] && modules[key].default ? modules[key].default : modules[key]
  )
  .filter(Boolean);

export default { topics };
