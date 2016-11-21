import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Path("/clouds")
public class APICloud {
	
	// vamos utilizar um Map estático para "simular" uma base de dados
	static private Map<Integer, CloudInstance> cloudMap;
	//static int countCloudMap = 0;

	static {
		cloudMap = new HashMap<Integer, CloudInstance>();

//		CloudInstance c1 = new CloudInstance(1, "m1");
		CloudInstance c1 = new CloudInstance();
		c1.setCloudId(1);
		c1.setNome("cloud1");
		c1.setSuporte64bits(true);

		cloudMap.put(c1.getCloudId(), c1);
			
//		CloudInstance c2 = new CloudInstance(2, "m2");
		CloudInstance c2 = new CloudInstance();
		c2.setCloudId(2);
		c2.setNome("cloud2");
		c2.setTamanhoArmLocal(20);

		cloudMap.put(c2.getCloudId(), c2);
		//countCloudMap = 2;
	}

	// Mostra XML de todas as instancias
		@GET
		@Produces("text/xml")
		public List<CloudInstance> getClouds() {
			//System.out.println(countCloudMap);
			return new ArrayList<CloudInstance>(cloudMap.values());
		}
		
		// Mostra XML de uma instância específica
		@Path("{id}")
		@GET
		@Produces("text/xml")
		public CloudInstance getCloud(@PathParam("id") int id) {
			return cloudMap.get(id);
		}

		// Adiciona XML com conteudo da instância da cloud
		@POST
		@Consumes("text/xml")
		@Produces("text/xml")
		public CloudInstance adicionaCloud(CloudInstance c) {
			CloudInstance newC = c;
			//c.setCloudId(cloudMap.size() + 1);
			if(c.getCloudId() == 0){
				Integer id = cloudMap.size() + 1;
//				newC = new CloudInstance(id, "cloud"+id);
				newC = new CloudInstance();
				newC.setCloudId(id);
				newC.setNome("cloud"+id);
			}
			cloudMap.put(newC.getCloudId(), newC);
			if(newC.status == 1)
				newC.startCloud();
			//countCloudMap++;
			//return newC.getNome() + " adicionado.";
			return cloudMap.get(newC.getCloudId());
		}

		// Atualiza XML com conteudo da instância da cloud
		@Path("{id}")
		@PUT
		@Consumes("text/xml")
		@Produces("text/plain")
		public String atualizaCloud(CloudInstance c, @PathParam("id") int id) {
			CloudInstance atual = cloudMap.get(id);
			atual.setNumCPU(c.getNumCPU());
			atual.setTamanhoMem(c.getTamanhoMem());
			atual.setTamanhoArmLocal(c.getTamanhoArmLocal());
			atual.setSuporteCUDA(c.getSuporteCUDA());
			atual.setCustoPorHora(c.getCustoPorHora());
			atual.setSuporte32bits(c.getSuporte32bits());
			atual.setSuporte64bits(c.getSuporte64bits());
System.out.println(c.getNome() + " atualizada.");
			return c.getNome() + " atualizada.";
		}

		// Remove instância da cloud
		@Path("{id}")
		@DELETE
		@Produces("text/plain")
		public String removeCloud(@PathParam("id") int id) {
			cloudMap.remove(id);
			//countCloudMap--;
			return "Cloud Instance removida.";
		}
}