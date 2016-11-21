import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class CloudInstance{
	
	private Integer cloudId;
	private String nome;
	private String descricao = "";
	private Integer numCPU = 1;
	private Integer tamanhoMem = 1024; // MB
	private Integer tamanhoArmLocal = 10; //GB
	private Float custoPorHora = 0.1f;
	private Boolean suporteCUDA = false;
	private Boolean suporte32bits = true;
	private Boolean suporte64bits = false;
	public Integer status = 0; // 0 para desligado e 1 para ligado.

/*	public CloudInstance(Integer cloudId, String nome){
		this.cloudId = cloudId;
		this.nome = nome;
	}*/
	
	public void startCloud(){
		// A ser implementada. Retorna um estatus.
		// Deve usar a cloud.
		this.status = 1;
	}
	
	// Getters e setters: 
	public Integer getCloudId() {
		return cloudId;
	}
	public void setCloudId(Integer cloudId) {
		this.cloudId = cloudId;
	}
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	public Integer getNumCPU() {
		return numCPU;
	}
	public void setNumCPU(Integer numCPU) {
		this.numCPU = numCPU;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public Integer getTamanhoMem() {
		return tamanhoMem;
	}
	public void setTamanhoMem(Integer tamanhoMem) {
		this.tamanhoMem = tamanhoMem;
	}
	public Integer getTamanhoArmLocal() {
		return tamanhoArmLocal;
	}
	public void setTamanhoArmLocal(Integer tamanhoArmLocal) {
		this.tamanhoArmLocal = tamanhoArmLocal;
	}
	public Float getCustoPorHora() {
		return custoPorHora;
	}
	public void setCustoPorHora(Float custoPorHora) {
		this.custoPorHora = custoPorHora;
	}
	public Boolean getSuporteCUDA() {
		return suporteCUDA;
	}
	public void setSuporteCUDA(Boolean suporteCUDA) {
		this.suporteCUDA = suporteCUDA;
	}
	public Boolean getSuporte32bits() {
		return suporte32bits;
	}
	public void setSuporte32bits(Boolean suporte32bits) {
		this.suporte32bits = suporte32bits;
	}
	public Boolean getSuporte64bits() {
		return this.suporte64bits;
	}
	public void setSuporte64bits(Boolean value) {
		this.suporte64bits = value;
	}
   }
