import axios from 'axios';
import config from '../config';

async function getSnapshots(logo, cover) {
  const { url, id } = await uploadImages(logo, cover);
  const mobileUrl = `${config.GENERATOR_API_URL}/snapshot/mobile/${id}`;
  const desktopUrl = `${config.GENERATOR_API_URL}/snapshot/desktop/${id}`;
  return { mobileUrl, desktopUrl, url };
}

async function uploadImages(logo, cover) {
  const formdata = new FormData();
  formdata.append('cover', cover.file);
  formdata.append('logo', logo.file);

  const apiUrl = `${config.GENERATOR_API_URL}/generate`;
  console.log(`uploading to ${apiUrl}`);

  const response = await axios({
    method: 'post',
    url: apiUrl,
    data: formdata,
    config: { headers: { 'Content-Type': 'multipart/form-data' } }
  });
  console.log('response: ', response.data);

  const { url, id } = response.data;
  return { id, url };
}

export default { getSnapshots };
