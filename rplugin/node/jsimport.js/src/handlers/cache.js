import db from '../ExportsList';

export default function cache(nvim) {
  db.setApi(nvim);

  return db.update();
}
